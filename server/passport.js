var session = require('express-session');
var github = require('./strategies/github');
var facebook = require('./strategies/facebook');

module.exports = function(app, passport) {

  app.use(session({
    secret: 'mySecretKey',
    resave: true,
    saveUninitialized: true
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Passport session setup.
  //   To support persistent login sessions, Passport needs to be able to
  //   serialize users into and deserialize users out of the session.  Typically,
  //   this will be as simple as storing the user ID when serializing, and finding
  //   the user by ID when deserializing.  However, since this example does not
  //   have a database of user records, the complete GitHub profile is serialized
  //   and deserialized.
  passport.serializeUser(function(user, done) {
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    done(null, obj);
  });

  github(passport);
  facebook(passport);

  app.post('/auth/github',
    passport.authenticate('github'));

  app.post('/auth/github/callback',
    passport.authenticate('github', { failureRedirect: '/login' }),
    function(req, res) {
      // Successful authentication, redirect home.
      res.redirect('/');
    });

  app.post('/auth/facebook', function(req, res) {
    return res.send({
      user: {}
    });
  });

  app.get('/auth/facebook/callback',
    passport.authenticate('facebook'));

app.get('/success', function(req, res, next) {
  res.send('Successfully logged in.');
});
 
app.get('/error', function(req, res, next) {
  res.send("Error logging in.");
});
}

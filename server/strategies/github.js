var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/user');

var GITHUB_CLIENT_ID = 'cf9d5783f46b1898df9d';
var GITHUB_CLIENT_SECRET = 'eae49976ce9c879c09c69f96a0c53cbfbc52e21f';

module.exports = function(passport) {
  passport.use(new GitHubStrategy({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000'
    },
    function(accessToken, refreshToken, profile, done) {
      // User.findOrCreate({ githubId: profile.id }, function(err, user) {
      //   return done(err, user);
      // });
      //process.nextTick(function() {
        //Assuming user exists
        done(null, profile);
      //});
    }
  ));
};

var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');

var FACEBOOK_APP_ID = '1628487270696090';
var FACEBOOK_APP_SECRET = '732ac54af18540e19d5fba789e3ed007';

module.exports = function(passport) {
  passport.use(new FacebookStrategy({
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        //Assuming user exists
        done(null, profile);
      });
    }
  ));
};

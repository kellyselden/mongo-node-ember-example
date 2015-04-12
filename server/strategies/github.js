var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var User = require('../models/user');

var GITHUB_CLIENT_ID = 'cf9d5783f46b1898df9d';
var GITHUB_CLIENT_SECRET = 'eae49976ce9c879c09c69f96a0c53cbfbc52e21f';

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));

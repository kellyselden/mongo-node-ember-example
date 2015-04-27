var User = require('../models/user');
var fs = require('fs');

var host = fs.readFileSync('host', 'utf8');

module.exports = function(passport, provider) {
  var Strategy = require('passport-' + provider).Strategy;

  var client = fs.readFileSync(provider, 'utf8').split('\n');

  passport.use(new Strategy({
      clientID: client[0],
      clientSecret: client[1],
      callbackURL: host + '/api/v1/auth/' + provider + '/callback'
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        //Assuming user exists
        done(null, profile);
      });
    }
  ));
};

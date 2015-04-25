/* jshint node: true */
var fs = require('fs');

var version = fs.readFileSync('./version', 'utf8').split('\n');

module.exports = function(environment) {
  //the environment hack in Brocfile.js isn't persisted throughout the entire app lifecycle
  environment = process.env.EMBER_ENV;

  var contentSecurityPolicy = {
    'default-src': "'none'",
    'script-src': "'self'",
    'font-src': "'self'",
    'connect-src': "'self'",
    'img-src': "'self'",
    'style-src': "'self'",
    'media-src': "'self'"
  };
  contentSecurityPolicy['script-src'] += ' https://maxcdn.bootstrapcdn.com https://cdn.socket.io';
  contentSecurityPolicy['style-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['font-src'] += ' https://maxcdn.bootstrapcdn.com';
  contentSecurityPolicy['connect-src'] +=
    ' https://github.com' +
    ' https://www.facebook.com';

  var ENV = {
    modulePrefix: 'client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: contentSecurityPolicy,
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      api: 'api/v1',
      defaultLocale: 'en-us',
      branch: version[0],
      version: version[1],
      timestamp: version[2]
    },
    torii: {
      sessionServiceName: 'session',
      providers: {
        'github-oauth2': {
          redirectUri: 'http://localhost:3000' // default is the current URL
        }
      }
    }
  };

  var facebook = { };

  switch (process.env.CLIENT_ENV) {
    case 'development':
      ENV.torii.providers['github-oauth2'].apiKey = 'cf9d5783f46b1898df9d';

      facebook.apiKey = '1632188546992629';
      facebook.redirectUri = 'http://localhost:4200/auth/facebook/callback';
      break;
    case 'express':
      ENV.torii.providers['github-oauth2'].apiKey = 'cf9d5783f46b1898df9d';

      facebook.apiKey = '1632193480325469';
      facebook.redirectUri = 'http://localhost:3000/auth/facebook/callback';
      break;
    case 'heroku':
      ENV.torii.providers['github-oauth2'].apiKey = '3d259b03470790e2f0fc';

      facebook.apiKey = '1628487270696090';
      facebook.redirectUri = 'http://mongo-node-ember-example.herokuapp.com/auth/facebook/callback';
      break;
    case 'production':
      break;
  }

  ENV.torii.providers['facebook-oauth2'] = facebook;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    contentSecurityPolicy['style-src'] += " 'unsafe-inline'";
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

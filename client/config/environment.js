/* jshint node: true */
var fs = require('fs');

var host, hostPath = './host';
if (fs.existsSync(hostPath)) {
  host = fs.readFileSync(hostPath, 'utf8');
}
if (!host) {
  host = 'http://localhost:3000';
}

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
    ' ' + host +
    ' ' + host.replace('http://', 'ws://') +
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
      host: host,
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
          redirectUri: 'http://localhost:4200' // default is the current URL
        },
        'facebook-oauth2': {
          apiKey: '1628487270696090',
          redirectUri: 'http://localhost:3000/auth/facebook/callback' // default is the current URL
        }
      }
    }
  };

  switch (process.env.CLIENT_ENV) {
    case 'development':
      ENV.torii.providers['github-oauth2'].apiKey = 'cf9d5783f46b1898df9d';
      break;
    case 'heroku':
      ENV.torii.providers['github-oauth2'].apiKey = '3d259b03470790e2f0fc';
      break;
    case 'production':
      break;
  }

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

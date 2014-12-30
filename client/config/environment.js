/* jshint node: true */
var fs = require('fs');

var host, hostPath = './host';
if (fs.existsSync(hostPath)) {
  host = fs.readFileSync(hostPath, 'utf8');
}
if (!host) {
  host = 'http://localhost:3000';
}

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
      defaultLocale: 'en-us'
    }
  };

  switch(process.env.CLIENT_ENV) {
    case 'development':
      break;
    case 'heroku':
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

    contentSecurityPolicy['script-src'] += " 'unsafe-eval' https://maxcdn.bootstrapcdn.com https://cdn.socket.io";
    contentSecurityPolicy['style-src'] += " 'unsafe-inline' https://maxcdn.bootstrapcdn.com";
    contentSecurityPolicy['font-src'] += ' https://maxcdn.bootstrapcdn.com';
    contentSecurityPolicy['connect-src'] +=
      ' ' + host +
      ' ' + host.replace('http://', 'ws://');
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

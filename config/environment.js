/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'library-client',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      // GITHUB_URL: 'https://api.github.com/user?'
    }
  };

  if (environment === 'development') {
    ENV.APP.HOST = 'http://localhost:3000';
    ENV.APP.SOCKET_HOST = 'ws://localhost:3200/';
    var TORII_REDIRECT_URL = 'http://localhost:4200/fetch';
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.HOST = 'https://api-lib-dev.herokuapp.com';
    ENV.APP.SOCKET_HOST = 'wss://peaceful-sands-86456.herokuapp.com/';
    var TORII_REDIRECT_URL = 'https://library-of-devexandria.firebaseapp.com/fetch';
  }

  ENV['torii'] = {
    sessionServiceName: 'session',
    providers: {
      'github-oauth2': {
        apiKey: process.env.GITHUB_CLIENT_ID,
        redirectUri: TORII_REDIRECT_URL
      }
    }
  }

  return ENV;
};

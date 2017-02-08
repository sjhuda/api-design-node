var _ = require('lodash');

// deafult config object for our api
var config = {
  /* just placing the name of our possible NODE_ENV values for later*/
  dev: 'development',
  test: 'testing',
  prod: 'production',
  port: process.env.PORT || 3000
};

// check to see if the NODE_ENV was set, if not, the set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
// set config.env to whatever the NODE_ENV is
config.env = process.env.NODE_ENV;

var envConfig;

// try to make sure file exists
// fall back to empty {} - needed by merge
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually got
  // something back
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}

module.exports = _.merge(config, envConfig);

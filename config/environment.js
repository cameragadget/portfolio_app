var _ = require('lodash');

var localEnvVars = {
  TITLE:      'portfolio_app',
  SAFE_TITLE: 'portfolio_app'
};

// Merge all environmental variables into one object.
module.exports = _.extend(process.env, localEnvVars);

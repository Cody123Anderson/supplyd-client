const constants = {
  local: {
    API_URL: 'http://localhost:3001'
  },
  development: {
    API_URL: 'https://dev-api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
  production: {
    API_URL: 'https://api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
};

module.exports = (() => {
  /**
   *   create-react-app only allows for three environments (test, development, and production)
   *   this allows us to to define other environments like local to test our lambdas locally
   *   using the serverless-offline package found in the user service :)
   */
  const { NODE_ENV, REACT_APP_NODE_ENV } = process.env;
  return REACT_APP_NODE_ENV
    ? constants[REACT_APP_NODE_ENV]
    : constants[NODE_ENV] || 'development'
})();
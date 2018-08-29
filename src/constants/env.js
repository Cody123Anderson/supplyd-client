const constants = {
  development: {
    API_URL: 'https://dev-api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
  production: {
    API_URL: 'https://api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
};

module.exports = constants[process.env.REACT_APP_STAGE || 'development'];

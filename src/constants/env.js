const constants = {
  development: {
    API_URL: 'https://dev-api.getsupplyd.com',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
  production: {
    API_URL: 'https://dev-api.getsupplyd.com', // Change once prod endpoints are live
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
  },
};

module.exports = constants[process.env.NODE_ENV || 'development'];

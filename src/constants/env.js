const constants = {
  local: {
    API_URL: 'http://localhost:3001',
    DOMAIN_URL: 'http://localhost:3000'
  },
  development: {
    API_URL: 'https://dev-api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
    DOMAIN_URL: 'https://dev.supplyd.io'
  },
  production: {
    API_URL: 'https://api.supplyd.io',
    REACT_APP_STRIPE_API_KEY: process.env.REACT_APP_STRIPE_API_KEY,
    DOMAIN_URL: 'https://supplyd.io'
  },
};

module.exports = constants[process.env.REACT_APP_STAGE || 'development'];

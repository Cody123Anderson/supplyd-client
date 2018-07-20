const constants = {
    development: {
        API_URL: 'https://dev-api.getsupplyd.com',
    },
    production: {
        API_URL: 'https://dev-api.getsupplyd.com', // Change once prod endpoints are live
    }
}

module.exports = constants[process.env.NODE_ENV || 'development'];
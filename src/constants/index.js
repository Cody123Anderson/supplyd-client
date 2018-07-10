const teeShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const constants = {
    development: {
        API_URL: 'https://dev-api.getsupplyd.com',
        TEE_SHIRT_SIZES: teeShirtSizes
    },
    production: {
        API_URL: 'https://api.getsupplyd.com',
        TEE_SHIRT_SIZES: teeShirtSizes
    }
}

module.exports = constants[process.env.NODE_ENV || 'development'];
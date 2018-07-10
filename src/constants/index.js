const teeShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const sweatshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const hatSizes = ['Small/Medium: 6 3/4"-7 1/4"', 'Large/X-Large 7 1/8"-7 5/8"'];
const pantSizes = ['S', 'M', 'L', 'XL', '2XL'];
const constants = {
    development: {
        API_URL: 'https://dev-api.getsupplyd.com',
        TEE_SHIRT_SIZES: teeShirtSizes,
        SWEATSHIRT_SIZES: sweatshirtSizes,
        HAT_SIZES: hatSizes,
        PANT_SIZES: pantSizes
    },
    production: {
        API_URL: 'https://dev-api.getsupplyd.com', // Change once prod endpoints are live
        TEE_SHIRT_SIZES: teeShirtSizes,
        SWEATSHIRT_SIZES: sweatshirtSizes,
        HAT_SIZES: hatSizes,
        PANT_SIZES: pantSizes
    }
}

module.exports = constants[process.env.NODE_ENV || 'development'];
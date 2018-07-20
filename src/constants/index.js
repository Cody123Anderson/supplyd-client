import routes from './routes';

const teeShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const sweatshirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const hatSizes = ['Small/Medium: 6 3/4 - 7 1/4 in.', 'Large/X-Large 7 1/8 - 7 5/8 in.'];
const pantSizes = ['S', 'M', 'L', 'XL', '2XL'];
const genders = ['Female', 'Male'];
const upperDashboardLinks = {
    employees: { name: 'Employees', to: routes.employees }
};

const constants = {
    teeShirtSizes,
    sweatshirtSizes,
    hatSizes,
    pantSizes,
    genders,
    upperDashboardLinks
}

export default constants;
import routes from './routes';

const numEmployeesOptions = ['1-10', '10-100', '100-500', '500-2000', '2000+'];
const teeShirtSizes = ['XS', 'S', 'M', 'L', 'XL', '2XL', '3XL'];
const genders = ['Female', 'Male'];
const upperDashboardLinks = {
    home: { name: 'Home', to: routes.home },
    employees: { name: 'Employees', to: routes.employees }
};

const lowerDashboardLinks = {
    // accountInfo: { name: 'Account Info', to: routes.accountInfo },
    paymentInfo: { name: 'Payment Info', to: routes.paymentInfo },
    // supportCenter: { name: 'Support Center', to: routes.supportCenter }
};

const footerLinks = [
    { name: 'Contact Us', to: routes.contactUs }
];

const constants = {
    numEmployeesOptions,
    teeShirtSizes,
    genders,
    upperDashboardLinks,
    lowerDashboardLinks,
    footerLinks
};

export default constants;

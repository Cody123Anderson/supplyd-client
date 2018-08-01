module.exports = {
  dashboard: '/dashboard',
  employees: '/dashboard/employees',
  home: '/dashboard/home',
  createEmployee: '/dashboard/employees/create',
  landingPage: '/',
  register: '/register',
  signIn: '/sign-in',
  swag: '/swag',
  swagProfile: (busName, id, token) => {
    if (!busName || !id || !token) {
      return '/swag/:businessName/employee/:employeeId/token/:token';
    }
    
    return `/swag/${busName}/employee/${id}/token/${token}`;
  },
  swagProfileComplete: (busName) => {
    if (!busName) {
      return '/swag/:businessName/complete';
    }

    return `/swag/${busName}/complete`;
  }
}

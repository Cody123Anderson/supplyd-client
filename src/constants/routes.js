module.exports = {
  employees: '/dashboard/employees',
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

module.exports = {
  resetPassword: '/reset-password',
  forgotPassword: '/forgot-password',
  contactUs: '/contact',
  accountInfo: '/dashboard/account-info',
  paymentInfo: '/dashboard/payment-info',
  supportCenter: '/dashboard/support-center',
  dashboard: '/dashboard',
  employees: '/dashboard/employees',
  home: '/dashboard/home',
  createEmployee: '/dashboard/employees/create',
  landingPage: '/',
  onboarding: '/onboarding',
  onboardingNumEmployees: '/onboarding/employees',
  onboardingNewHires: '/onboarding/new-hires',
  register: '/register',
  signIn: '/sign-in',
  swag: '/swag',
  swagProfileNewHire: (busName, id, token) => {
    if (!busName || !id || !token) {
      return '/swag/:businessName/employee/:employeeId/token/:token';
    }

    return `/swag/${busName}/employee/${id}/token/${token}`;
  },
  swagProfile: (busName, busId) => {
    if (!busName || !busId) {
      return '/swag/employee/:businessName/:businessId';
    }

    return `/swag/employee/${busName}/${busId}`;
  },
  swagProfileComplete: (busName) => {
    if (!busName) {
      return '/swag/:businessName/complete';
    }

    return `/swag/${busName}/complete`;
  }
}

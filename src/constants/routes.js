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
  landingPage: '/',
  onboarding: '/onboarding',
  onboardingNumEmployees: '/onboarding/employees',
  onboardingNewHires: '/onboarding/new-hires',
  register: '/register',
  signIn: '/sign-in',
  swag: '/swag',
  swagProfile: (employeeStatus, busName, busId) => {
    if (!busName || !busId || !employeeStatus) {
      return '/swag/:employeeStatus/:businessName/:businessId';
    }

    return `/swag/${employeeStatus}/${busName}/${busId}`;
  },
  swagProfileComplete: (busName) => {
    if (!busName) {
      return '/swag/:businessName/complete';
    }

    return `/swag/${busName}/complete`;
  }
}

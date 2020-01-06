
export const routes = {
    stylori: '/stylori',
    PricingPage: '/pricingPage',
    Cart: '/cart',
    Checkout: '/Checkout',
    Register: '/register',
    UserLogin: '/login',
    UserRegister: '/registers',
    HomePageStylori: '/home',
    Account: `/account${"-" + window.location.pathname.split("-")[1]}`,
    Silver: '/StyloriSilver',
    Faqs: '/faqs',
    Stories: '/stories',
    Collection: '/collection',
    ProductCare: '/productcare',
    Shipping: '/deliveryreturns',
    PrivacyPolicy: '/privacypolicy',
    TermsConditions: '/termsconditions',
    AboutUs: '/aboutus',
    ForgotPassword:'/forgotPassword',
    paymentsuccess:'/paymentsuccess',
    paymentfail:'/fail'
}

export default routes;

export const AUTH_ENDPOINTS = {
    SIGNUP: '/users/signup',
    LOGIN: '/users/login',
    FORGOT_PASSWORD: '/users/forgotPassword',
    RESET_PASSWORD: (token) => `/users/resetPassword/${token}`
};
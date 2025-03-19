import api from "services/api/axios";
import { AUTH_ENDPOINTS } from "services/api/endpoints";

export const authService = {
    signup: async (userData) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.SIGNUP, userData);
            return response.data;
        } catch (error) {
            console.error('Signup error: ', error);
            throw error;
        }
    }, 

    login: async (credentials) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.LOGIN, credentials);
            return response.data;
        } catch (error) {
            console.error('Login error: ', error);
            throw error;
        }
    }, 

    forgotPassword: async (email) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, email);
            return response.data;
        } catch (error) {
            console.log('Forgot password error: ', error);
            throw error;
        }
    }, 
}
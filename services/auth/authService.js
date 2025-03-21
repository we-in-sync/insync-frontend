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

    login: async (email, password) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.LOGIN, email, password);
            return response.data;
        } catch (error) {
            console.error('Login error: ', error);
            throw error;
        }
    }, 

    forgotPassword: async (email) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, {email});
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('Forgot password error: ', error);

            if (error.response && error.response.data) {
                console.log('Error response data: ', error.response.data);
                return error.response.data;
            }
            throw error;
        }
    }, 

    resetPassword: async (token, password, passwordConfirm) => {
        try {
            const response = await api.patch(AUTH_ENDPOINTS.RESET_PASSWORD(token), { password, passwordConfirm });
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.log('Reset password error: ', error);
            
            if (error.response && error.response.data) {
                console.log('Error response data: ', error.response.data);
                return error.response.data;
            }
            throw error;
        }
    }
}
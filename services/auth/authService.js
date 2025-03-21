import api from "services/api/axios";
import { AUTH_ENDPOINTS } from "services/api/endpoints";

export const authService = {
    signup: async (userData) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.SIGNUP, userData);
            return {
                success: true, 
                data: response.data, 
            }
        } catch (error) {
            return {
                success: false, 
                data: error
            }
        }
    }, 

    login: async (email, password) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.LOGIN, email, password);
            return {
                success: true, 
                data: response.data,
            }
        } catch (error) {
            return {
                success: false, 
                data: error, 
            }
        }
    }, 

    forgotPassword: async (email) => {
        try {
            const response = await api.post(AUTH_ENDPOINTS.FORGOT_PASSWORD, {email});
            return {
                success: true, 
                data: response.data, 
            }
        } catch (error) {
            if (error.response && error.response.data) {
                return {
                    success: false, 
                    data: error.response.data, 
                }
            }
            throw error;
        }
    }, 

    resetPassword: async (token, password, passwordConfirm) => {
        try {
            const response = await api.patch(AUTH_ENDPOINTS.RESET_PASSWORD(token), { password, passwordConfirm });
            return {
                success: true, 
                data: response.data,
            }
        } catch (error) {
            if (error.response && error.response.data) {
                return {
                    success: false, 
                    data: error.response.data,
                }
            }
            throw error;
        }
    }
}
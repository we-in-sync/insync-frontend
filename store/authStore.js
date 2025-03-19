import { create } from "zustand";
import { authService } from "services";

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,

    signup: async (userData) => {
        set({ isLoading: true, error: null });

        try {
            const response = await authService.signup(userData);

            set({
                user: response.user,
                token: response.token,
                isLoading: false,
            });

            return response;

        } catch (error) {
            set({
                error: error || 'Signup failed',
                isLoading: false,
            });

            throw error;
        }
    },

    login: async (credentials) => {
        set({ isLoading: true, error: null });

        try {

            const response = await authService.login(credentials);

            set({
                user: response.user,
                token: response.token,
                isLoggedIn: true,
                isLoading: false,
            });

            return response;

        } catch (error) {
            set({
                error: error || 'Login failed',
                isLoading: false,
            });

            throw error;
        }
    },

    forgotPassword: async (email) => {
        set({ isLoading: true, error: null });
        try {
            const response = await authService.forgotPassword(email);
            set({ isLoading: false });
            return response;
        } catch (error) {
            set({
                error: error || 'Password reset request failed',
                isLoading: false,
            });
            throw error;
        }
    },

    clearError: () => set({ error: null }),

}));

export default useAuthStore;
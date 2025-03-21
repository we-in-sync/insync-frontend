import { create } from "zustand";
import { authService } from "services";

const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,

    signup: async (userData) => {
        set({ isLoading: true })
        const response = await authService.signup(userData)
        set({ isLoading: false })
        return response
    },

    login: async (credentials) => {
        set({ isLoading: true })
        const response = await authService.login(credentials)
        set({ isLoading: false })
        if (response.success) {
            set({ user: response.data.user })
        }
        return response
    },

    forgotPassword: async (email) => {
        set({ isLoading: true })
        const response = await authService.forgotPassword(email);
        set({ isLoading: false })
        return response;
    },

    resetPassword: async (token, password, passwordConfirm) => {
        set({ isLoading: true })
        const response = await authService.resetPassword(token, password, passwordConfirm)
        set({ isLoading: false })
        return response
    },

    clearError: () => set({ error: null }),

}));

export default useAuthStore;
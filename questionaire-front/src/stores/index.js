import { defineStore } from 'pinia';
import { ref } from 'vue';
import authService from '../services/authService';

export const useUserStore = defineStore('user', () => {
    const user = ref(null);

    async function login(credentials) {
        user.value = await authService.login(credentials);
    }

    async function register(credentials) {
        await authService.register(credentials);
    }

    function logout() {
        user.value = null;
        authService.logout();
    }

    return { user, login, register, logout };
});
import axios from 'axios';

const API_URL = 'http://localhost:5001/api/auth';

export default {
    async login(credentials) {
        const response = await axios.post(`${API_URL}/login`, credentials);
        localStorage.setItem('token', response.data.token);
        return response.data;
    },

    async register(credentials) {
        await axios.post(`${API_URL}/register`, credentials);
    },

    logout() {
        localStorage.removeItem('token');
    }
};
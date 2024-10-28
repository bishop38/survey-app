import axios from 'axios';

const API_URL = 'http://localhost:5001/api/surveys';

export default {
    async getSurveys() {
        const response = await axios.get(API_URL);
        return response.data;
    },

    async createSurvey(surveyData) {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_URL}/create`, surveyData, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },

    async submitResponse(surveyId, answers) {
        const token = localStorage.getItem('token');
        const response = await axios.post(`${API_URL}/${surveyId}/submit`, { answers }, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    }
};
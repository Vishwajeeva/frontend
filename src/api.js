// api.js

import axios from 'axios';

const BASE_URL = 'https://vishwa278.pythonanywhere.com/api';  // Replace with your PyAnywhere domain

// Create axios instance with base configuration
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Example API calls
export const apiService = {
    // Login
    login: async (credentials) => {
        try {
            const response = await api.post('/login/', credentials);
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Get data
    getData: async () => {
        try {
            const response = await api.get('/data/');
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    },

    // Add more API calls as needed
};

export default api;

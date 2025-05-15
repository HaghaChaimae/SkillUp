import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    withCredentials: true,  // Important pour envoyer les cookies de session
});

export default api;

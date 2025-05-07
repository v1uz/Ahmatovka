
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAccommodations = () => api.get('/accommodations');
export const getOffers = () => api.get('/offers');
export const getEvents = () => api.get('/events');

export default api;


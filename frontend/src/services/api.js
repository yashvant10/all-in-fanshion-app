import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
});

export const aiApi = {
  analyze: (payload) => api.post('/ai/analyze', payload),
  recommend: (payload) => api.post('/ai/recommend', payload),
  chat: (payload) => api.post('/ai/chat', payload),
  tryOn: (payload) => api.post('/ai/tryon', payload),
};

export default api;

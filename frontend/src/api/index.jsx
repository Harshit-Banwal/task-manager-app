import axios from 'axios';

const api = axios.create({
  baseURL: 'https://task-manager-api-lac.vercel.app/api',
  // baseURL: 'http://localhost:5000/api',
});
export default api;

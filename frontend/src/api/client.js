import axios from 'axios';

// Use CRA proxy (frontend/package.json "proxy") in development.
// Optionally, allow overriding via REACT_APP_API_URL
const client = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/',
  withCredentials: false,
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default client;

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:3200",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
import axios from "axios";
import { UserSession } from "../store/UserSession";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

api.interceptors.request.use(
  (config) => {
    const token = UserSession.getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      UserSession.logout();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default api;

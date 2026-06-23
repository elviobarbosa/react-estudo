import { useAuthStore } from "@/store/authStore"
import axios from "axios"

export const api = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 10000
})

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && (error.response.status === 401 || error.response.status === 403)) {
      console.error("Sessão expirada ou Token inválido");
      useAuthStore.getState().logout();
    }
    
    return Promise.reject(error);
  }
);
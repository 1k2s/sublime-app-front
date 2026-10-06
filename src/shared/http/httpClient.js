// Cliente HTTP único da aplicação: envia o token e trata o 401
import axios from "axios";

const TOKEN_KEY = "sublime.token";

let unauthorizedHandler = null;

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}

// Registrado pelo AuthContext, para o shared/ não importar de domain/
export function setUnauthorizedHandler(handler) {
  unauthorizedHandler = handler;
}

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

httpClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      clearToken();
      unauthorizedHandler?.();
    }
    return Promise.reject(error);
  }
);

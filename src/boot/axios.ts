import { defineBoot } from '#q-app/wrappers';
import axios, { type AxiosInstance } from 'axios';

declare module 'vue' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
    $api: AxiosInstance;
  }
}

// Use environment variable, fallback to localhost for dev if undefined
const baseURL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL,
});

export default defineBoot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };

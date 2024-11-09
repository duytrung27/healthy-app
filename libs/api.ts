import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const API = {
  apiInstance: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  }),
  API_PATH: {
    AUTH: {
      LOGIN: "/auth/login",
    },
  },
  auth: {},
};

API.apiInstance.interceptors.request.use((config) => {
  if ([API.API_PATH.AUTH.LOGIN].includes(config.url ?? "")) {
    return config;
  }
  const token = Cookies.get("API_TOKEN");
  if (token) {
    if (config && config.headers) {
      config.headers["Authorization"] = `Bearer=${token}`;
    }
  }
  return config;
});

API.apiInstance.interceptors.response.use(
  (res) => {
    return Promise.resolve(res);
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default API;

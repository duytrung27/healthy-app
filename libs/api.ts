import axios, { AxiosResponse } from "axios";
import Cookies from "js-cookie";

const API = {
  apiInstance: axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  }),
  API_PATH: {},
  auth: {},
};

API.apiInstance.interceptors.request.use((config) => {
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

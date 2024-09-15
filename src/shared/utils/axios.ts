import axios from "axios";

import { CONFIG } from "src/global-config";

export const axiosInstance = axios.create({ baseURL: CONFIG.site.apiUrl });

axiosInstance.interceptors.request.use(
  // TODO: get accessToken from localstorage or cookie
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.message && error.response?.data) || "Something went wrong!"
    )
);

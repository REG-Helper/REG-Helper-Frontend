import axios from "axios";

import { CONFIG } from "src/global-config";

const axiosInstance = axios.create({ baseURL: CONFIG.site.apiUrl });

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.message && error.response.data) || "Something went wrong!"
    )
);

export default axiosInstance;

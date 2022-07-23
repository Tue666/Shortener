import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response && response.data,
  (error) => Promise.reject(error)
);

export default axiosInstance;

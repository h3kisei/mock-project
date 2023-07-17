import axios from 'axios';

const baseURL = process.env.REACT_APP_BASE_PATH || '';
const axiosInstance = axios.create({ baseURL: baseURL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong'),
);

export default axiosInstance;
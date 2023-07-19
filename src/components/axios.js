import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://2ndstorey.com:8002", // Replace with your API base URL
  timeout: 5000, // Request timeout in milliseconds
});

export default AxiosInstance;

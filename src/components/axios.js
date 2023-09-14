import axios from "axios";

const AxiosInstance = axios.create({
  // baseURL: "https://backend.2ndstorey.com", // Replace with your API base URL
  baseURL: "http://localhost:8002",
  timeout: 5000, // Request timeout in milliseconds
});

export default AxiosInstance;

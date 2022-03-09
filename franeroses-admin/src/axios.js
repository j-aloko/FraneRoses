import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://franeroses-server.herokuapp.com/api",
});

export default axiosInstance;

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    token: "Bearer " + JSON.parse(localStorage.getItem("user"))?.accessToken,
  },
});

export default axiosInstance;

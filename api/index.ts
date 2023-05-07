import axios from "axios";

const api = axios.create({
  baseURL: "https://api.toshu.me",
  withCredentials: true,
});

export default api;

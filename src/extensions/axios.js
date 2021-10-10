import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
console.log(baseURL);
let headers = {};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

export default axiosInstance;

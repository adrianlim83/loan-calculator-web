import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

let headers = {};

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0"
};

export const REACT_TOKEN_AUTH_KEY = "REACT_TOKEN_AUTH_KEY";
const token = JSON.parse(localStorage.getItem(REACT_TOKEN_AUTH_KEY));

if (token !== null) {
  axiosInstance.defaults.headers = {
    ...axiosInstance.defaults.headers,
    Authorization: `Bearer ${token.access_token}`,
  };
}

export default axiosInstance;

import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;

let headers = {};

const Axios = axios.create({
  baseURL: baseURL,
  headers
});

Axios.defaults.headers = {
  "Cache-Control": "no-cache",
  Pragma: "no-cache",
  Expires: "0",
};

export default Axios;

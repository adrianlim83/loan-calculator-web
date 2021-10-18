import Axios from "./Axios";

export const REACT_TOKEN_AUTH_KEY = "REACT_TOKEN_AUTH_KEY";

Axios.interceptors.request.use(
  request => {
    let token = localStorage.getItem(REACT_TOKEN_AUTH_KEY);
    if (token !== null) {
      token = JSON.parse(localStorage.getItem(REACT_TOKEN_AUTH_KEY));
      request.headers['Authorization'] = `Bearer ${token.access_token}`;      
    }
    return request;
  }
);

export default Axios

import { refresh } from "../actions/auth";
import Axios from "./Axios";
import { encryptStorage } from "./EncryptStorage";

export const REACT_TOKEN_AUTH_KEY = "REACT_TOKEN_AUTH_KEY";

/**
 * Intercept each secure request, and attach a bearer token if it presents
 */
Axios.interceptors.request.use((request) => {
  const token = encryptStorage.getItem(REACT_TOKEN_AUTH_KEY);
  if (token !== undefined) {
    request.headers["Authorization"] = `Bearer ${token.access_token}`;
  }
  return request;
});

/**
 * Intercept each response, and exchange a new token if the token is expired
 * If exchanging a new token is unsuccessful, remove the token from storage
 */
Axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      const token = encryptStorage.getItem(REACT_TOKEN_AUTH_KEY);
      if (token !== undefined) {
        refresh(token)
          .then((response) => {
            // Success, update new token
            const update = response.data;
            if (update !== null) {
              encryptStorage.setItem(REACT_TOKEN_AUTH_KEY, update);
            }
          })
          .catch((error) => {
            // Invalid refresh token, remove token
            encryptStorage.removeItem(REACT_TOKEN_AUTH_KEY);
            window.location.reload();
          });
      }
    }
    return Promise.reject(error);
  }
);

export default Axios;

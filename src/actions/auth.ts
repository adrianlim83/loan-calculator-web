/**
 * Create Auth Provider
 */
import { createAuthProvider } from "react-token-auth";
import Axios from "../extensions/Axios";
import { REACT_TOKEN_AUTH_KEY } from "../extensions/SecureAxios";

export const [useAuth, authFetch, login, logout] = createAuthProvider<{
  access_token: string;
  refresh_token: string;
}>({
  accessTokenKey: "access_token",
  localStorageKey: REACT_TOKEN_AUTH_KEY,
  onUpdateToken: (token) => refresh(token)
});

/**
 * Exchange new token
 * @param {*} token 
 * @returns 
 */
 export async function refresh(token: any) {
  const {data} = await Axios.post("/refresh", token, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}

/**
 * Generate new token
 * @param {*} credential 
 * @returns 
 */
 export async function token(credential: any) {
  const {data} = await Axios.post("/login", credential, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}
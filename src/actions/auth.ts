/**
 * Create Auth Provider
 */
import { createAuthProvider } from "react-token-auth";
import axiosInstance from "../extensions/axios";

export const REACT_TOKEN_AUTH_KEY = "REACT_TOKEN_AUTH_KEY";

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
  const {data} = await axiosInstance.post("/refresh", token, {
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
  const {data} = await axiosInstance.post("/login", credential, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}
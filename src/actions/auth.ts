/**
 * Create Auth Provider
 */
import { createAuthProvider } from "react-token-auth";
import { refresh } from "./credential";

export const REACT_TOKEN_AUTH_KEY = "REACT_TOKEN_AUTH_KEY";

export const [useAuth, authFetch, login, logout] = createAuthProvider<{
  access_token: string;
  refresh_token: string;
}>({
  accessTokenKey: "access_token",
  localStorageKey: REACT_TOKEN_AUTH_KEY,
  onUpdateToken: (token) => refresh(token)
});
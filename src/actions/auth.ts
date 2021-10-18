/**
 * Create Auth Provider
 */
import { createAuthProvider } from "react-token-auth";
import Axios from "../extensions/Axios";
import { encryptStorage } from "../extensions/EncryptStorage";
import { REACT_TOKEN_AUTH_KEY } from "../extensions/SecureAxios";

/**
 * Create default encrypt store which compatible with 'react-token-auth'
 *
 * @param initData
 * @returns
 */
export const createDefaultEncryptStore = (initData = {}) => {
  const data: any = initData;

  const getItem = (key: string) => {
    return JSON.stringify(data[key]);
  };

  const setItem = (key: string, value: any) => {
    data[key] = value;
    encryptStorage.setItem(key, value);
  };

  const removeItem = (key: string) => {
    delete data[key];
    encryptStorage.removeItem(key);
  };

  return { getItem, setItem, removeItem };
};

export const [useAuth, authFetch, login, logout] = createAuthProvider<{
  access_token: string;
  refresh_token: string;
}>({
  accessTokenKey: "access_token",
  localStorageKey: REACT_TOKEN_AUTH_KEY,
  storage: createDefaultEncryptStore({
    [REACT_TOKEN_AUTH_KEY]:
      encryptStorage.getItem<string>(REACT_TOKEN_AUTH_KEY),
  }),
  onUpdateToken: (token) => refresh(token),
});

/**
 * Exchange new token
 * @param {*} token
 * @returns
 */
export async function refresh(token: any) {
  const { data } = await Axios.post("/refresh", token, {
    headers: {
      "Content-Type": "application/json",
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
  const { data } = await Axios.post("/login", credential, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return data;
}

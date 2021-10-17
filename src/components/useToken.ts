import { useState } from "react";

/**
 * @returns auth token
 */
export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    if (tokenString === null) {
      return null;
    }

    const userToken: TokenProp = JSON.parse(tokenString);
    return userToken;
  };

  const [token, setToken] = useState(getToken());

  const isAuthenticated = token !== null;

  const saveToken = (userToken: TokenProp) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken);
  };

  const removeToken = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return {
    isAuthenticated,
    token,
    setToken: saveToken,
    remove: removeToken,
  };
}

interface TokenProp {
  access_token: string;
}

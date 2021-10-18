import axiosInstance from "../extensions/axios";

/**
 * Generate new token
 * @param {*} credential 
 * @returns 
 */
export async function token(credential) {
  const {data} = await axiosInstance.post("/login", credential, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}

/**
 * Exchange new token
 * @param {*} token 
 * @returns 
 */
export async function refresh(token) {
  const {data} = await axiosInstance.post("/refresh", token, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}
import axiosInstance from "../extensions/axios";

export async function login(credential) {
  const {data} = await axiosInstance.post("/login", credential, {
    headers: {
      "Content-Type": "application/json"
    },
  });
  return data;
}
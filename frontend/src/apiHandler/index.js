import axios from "axios";
const serverUrl = "http://localhost:8003";
export const postApiHandler = async (endpoint, user) => {
  const response = await axios.post(serverUrl + endpoint, user);
  return response;
};

export const userVerifiyHandler = async (endpoint) => {
  const response = await axios.get(serverUrl + endpoint);
  return response;
};

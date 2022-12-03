import axios from "axios";

export const getUserData = async (uid: string) => {
  return await axios.get(`/api/user/${uid}`).then((res) => res.data);
};

export const createUser = async () => {
  return await axios.post("/api/user/create").then((res) => res.data);
};

export const getRanking = async () => {
  return await axios.get("/api/rank").then((res) => res.data);
};

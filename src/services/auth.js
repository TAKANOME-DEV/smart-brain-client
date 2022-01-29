import { http } from "./http";
import jwtDecode from "jwt-decode";

export const logUser = async (email, password) => {
  const { data } = await http.post("/auth", { email, password });
  localStorage.setItem("token", data);
  return decodeToken(data);
};

export const registerUser = async (username, email, password) => {
  const { data } = await http.post("/users", { username, email, password });
  localStorage.setItem("token", data);
  return decodeToken(data);
};

export const updateEntries = async (id) => {
  const { data } = await http.put("/entry", { id });
  return data;
};

export const getToken = () => localStorage.getItem("token");

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (err) {
    return null;
  }
};

export const removeToken = () => localStorage.removeItem("token");

export const getBoundingBox = async (input) => {
  const { data } = await http.post("/clarifai", { input });
  return data;
};

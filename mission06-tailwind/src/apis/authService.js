// 사용자 Apis
import LocalService from "./LocalService.js";

const endPoint = "users";
const AuthService = new LocalService(endPoint);

// 사용자 API 메서드 내보내기
export const getUser = () => AuthService.request("get", `${endPoint}/info`);

export const signup = (data) =>
  AuthService.request("post", `${endPoint}/signup`, data);

export const login = (data) =>
  AuthService.request("post", `${endPoint}/login`, data);

export const logout = () => AuthService.request("get", `${endPoint}/logout`);

export const updateUser = (data) => {
  AuthService.request("patch", `${endPoint}/update`, data);
};

export const deleteUser = () => {
  AuthService.request("delete", `${endPoint}/delete`);
};

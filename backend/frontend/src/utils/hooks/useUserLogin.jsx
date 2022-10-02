import { api } from "../axiosInstance";
import { useMutation } from "react-query";

const fetchLoginUser = async (formdata) => {
  return await api.post("user/login", formdata, {
    withCredentials: true,
  });
};

export const useUserLogin = () => {
  return useMutation("fetch-lOGIN", fetchLoginUser);
};

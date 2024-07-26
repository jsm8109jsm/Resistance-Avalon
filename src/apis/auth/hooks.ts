import { useMutation } from "react-query";
import { login, logout } from ".";
import { User } from "firebase/auth";
import { LoginData } from "./types";
import { useRecoilState } from "recoil";
import modalState from "@/atoms/modal/atom";

export const useLogin = () => {
  const [, setModal] = useRecoilState(modalState);
  return useMutation((userData: User) => login(userData), {
    onSuccess: (data: LoginData) => {
      localStorage.accessToken = data.accessToken;
      localStorage.refreshToken = data.refreshToken;
      if (data.isSignUp) {
        setModal((prev) => [...prev, "SIGN_UP"]);
      }
    },
  });
};

export const useLogout = () => {
  return useMutation(() => logout(), {
    onSuccess: () => {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken ");
    },
  });
};

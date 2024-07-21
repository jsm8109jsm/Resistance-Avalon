import { useMutation } from "react-query";
import { login } from ".";
import { User } from "firebase/auth";
import { LoginData } from "./types";
import { useRecoilState } from "recoil";
import ModalState from "@/atoms/Modal/atom";

export const useLogin = () => {
  const [, setModal] = useRecoilState(ModalState);
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

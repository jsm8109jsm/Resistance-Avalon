import { useMutation } from "react-query";
import { updateNickname } from ".";
import { useRecoilState } from "recoil";
import ModalState from "@/atoms/Modal/atom";

export const useUpdateNickname = () => {
  const [, setModal] = useRecoilState(ModalState);
  return useMutation((nickname: string) => updateNickname(nickname), {
    onSuccess: () => {
      setModal((prev) => prev.filter((type) => type !== "SIGN_UP"));
    },
  });
};

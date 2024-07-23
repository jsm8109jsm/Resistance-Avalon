import { useMutation, useQuery } from "react-query";
import { getMyInfo, updateNickname } from ".";
import { useRecoilState } from "recoil";
import ModalState from "@/atoms/Modal/atom";
import { INFO_QUERY_KEY } from "./keys";

export const useUpdateNickname = () => {
  const [, setModal] = useRecoilState(ModalState);
  return useMutation((nickname: string) => updateNickname(nickname), {
    onSuccess: () => {
      setModal((prev) => prev.filter((type) => type !== "SIGN_UP"));
    },
  });
};

export const useGetMyInfo = () => {
  return useQuery(INFO_QUERY_KEY, () => getMyInfo(), {
    enabled: !!localStorage.accessToken,
  });
};

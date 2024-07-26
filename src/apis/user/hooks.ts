import { useMutation, useQuery } from "react-query";
import { getMyInfo, updateNickname } from ".";
import { useRecoilState } from "recoil";
import modalState from "@/atoms/modal/atom";
import { INFO_QUERY_KEY } from "./keys";
import myInfoState from "@/atoms/myInfo/atom";
import MyInfoType from "@/atoms/myInfo/type";

export const useUpdateNickname = () => {
  const [, setModal] = useRecoilState(modalState);
  return useMutation((nickname: string) => updateNickname(nickname), {
    onSuccess: () => {
      setModal((prev) => prev.filter((type) => type !== "SIGN_UP"));
    },
  });
};

export const useGetMyInfo = () => {
  const [, setMyInfo] = useRecoilState(myInfoState);
  return useQuery(INFO_QUERY_KEY, () => getMyInfo(), {
    enabled: !!localStorage.accessToken,
    onSuccess: (data: MyInfoType) => {
      setMyInfo(data);
    },
  });
};

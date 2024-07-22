import { getAccessToken } from "@/functions/getToken";
import { apiClient } from "@/libs/axios/apiClient";

export const updateNickname = async (nickname: string) =>
  (
    await apiClient.post<{ nickname: string }>(
      `/user/nickname`,
      { nickname },
      getAccessToken(),
    )
  ).data;

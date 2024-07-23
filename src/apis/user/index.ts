import { getAccessToken } from "@/functions/getToken";
import { apiClient } from "@/libs/axios/apiClient";
import { NextResponse } from "next/server";

export const updateNickname = async (nickname: string) =>
  (
    await apiClient.post<{ nickname: string }>(
      `/user/nickname`,
      { nickname },
      getAccessToken(),
    )
  ).data;

export const getMyInfo = async () =>
  (await apiClient.get(`/user/info`, getAccessToken())).data;

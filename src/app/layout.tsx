"use client";
import "./globals.css";
import PortalProvider from "@/components/provider/PortalProvider";
import { RecoilRoot } from "recoil";
import { Roboto, Noto_Sans_KR } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.
import { QueryClient, QueryClientProvider } from "react-query";
import { apiClient } from "@/libs/axios/apiClient";
import { getRefreshToken } from "@/functions/getToken";
import MyInfoProvider from "@/components/provider/MyInfoProvider";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

apiClient.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    // if (typeof localStorage.refresh_token === "undefined") {
    //   return Promise.reject(error);
    // }
    if (typeof localStorage.refreshToken === "undefined") {
      return Promise.reject(error);
    }
    if (!localStorage.refreshToken) {
      // setIsNeedLogin(true);
      localStorage.removeItem("accessToken");
      return Promise.reject(error);
    }
    // eslint-disable-next-line no-underscore-dangle
    if (error.response.status === 401 && !originalRequest._retry) {
      // const refreshToken = localStorage.refresh_token;
      // eslint-disable-next-line no-underscore-dangle
      originalRequest._retry = true;
      const response = await apiClient.get("/auth/refresh", getRefreshToken());

      if (response.status === 200) {
        const accessToken = response.data.accessToken;
        localStorage.setItem("accessToken", accessToken);
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return apiClient(originalRequest);
      }
      // setIsNeedLogin(true);
    }

    return Promise.reject(error);
  },
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html lang="en">
      <body className={notoSansKr.className}>
        <div id="modal" />
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <PortalProvider>
              <MyInfoProvider>{children}</MyInfoProvider>
            </PortalProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
}

"use client";
import "./globals.css";
import PortalProvider from "@/components/provider/PortalProvider";
import { RecoilRoot } from "recoil";
import { Roboto, Noto_Sans_KR } from "next/font/google"; // Roboto와 한글 NotoSans를 사용합니다.
import { QueryClient, QueryClientProvider } from "react-query";

const notoSansKr = Noto_Sans_KR({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["100", "400", "700", "900"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

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
            <PortalProvider>{children}</PortalProvider>
          </RecoilRoot>
        </QueryClientProvider>
      </body>
    </html>
  );
}

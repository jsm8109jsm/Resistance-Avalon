"use client";
import "./globals.css";
import PortalProvider from "@/components/provider/PortalProvider";
import { RecoilRoot } from "recoil";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div id="modal" />
        <RecoilRoot>
          <PortalProvider>{children}</PortalProvider>
        </RecoilRoot>
      </body>
    </html>
  );
}

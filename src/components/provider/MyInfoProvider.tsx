import { useGetMyInfo } from "@/apis/user/hooks";
import React, { ReactNode } from "react";

function MyInfoProvider({ children }: { children: ReactNode }) {
  const { data, isSuccess, isLoading } = useGetMyInfo();
  if (isLoading) return <></>;
  return <>{children}</>;
}

export default MyInfoProvider;

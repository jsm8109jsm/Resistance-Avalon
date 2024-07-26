import { useGetMyInfo } from "@/apis/user/hooks";
import React, { ReactNode } from "react";
import Loading from "../loading/Loading";

function MyInfoProvider({ children }: { children: ReactNode }) {
  const { data, isSuccess, isLoading } = useGetMyInfo();
  if (isLoading) return <Loading />;
  return <>{children}</>;
}

export default MyInfoProvider;

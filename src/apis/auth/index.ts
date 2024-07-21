import { apiClient } from "@/libs/axios/apiClient";
import { User } from "firebase/auth";
import { LoginData } from "./types";

export const login = async (userData: User) =>
  (await apiClient.post<LoginData>(`/auth/google`, userData)).data;

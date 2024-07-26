import { atom } from "recoil";
import MyInfoType from "./type";

const myInfoState = atom<MyInfoType>({
  key: "myInfoState",
  default: {
    nickname: "",
    profileImg: "",
  },
});

export default myInfoState;

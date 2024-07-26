import { atom } from "recoil";
import ModalType from "./type";

const modalState = atom<ModalType[]>({
  key: "modalState",
  default: [],
});

export default modalState;

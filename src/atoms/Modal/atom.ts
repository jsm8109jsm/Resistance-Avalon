import { atom } from "recoil";
import ModalType from "./type";

const ModalState = atom<ModalType[]>({
  key: "ModalState",
  default: [],
});

export default ModalState;

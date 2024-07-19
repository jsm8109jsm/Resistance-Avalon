import { atom } from "recoil";
import { ModalType } from "./type";

const ModalState = atom<ModalType>({
  key: "ModalState",
  default: {
    isOpen: false,
    body: undefined,
  },
});

export default ModalState;

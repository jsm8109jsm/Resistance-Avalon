"use client";

import modalState from "@/atoms/modal/atom";
import ModalType from "@/atoms/modal/type";
import { ReactNode } from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";
import SignUpModal from "./SignUpModal";
import MyInfoModal from "./MyInfoModal";

const modalBody: { [x in ModalType]: ReactNode } = {
  SETTING: "SETTING",
  HELP: "HELP",
  MY_INFO: <MyInfoModal />,
  AUTH: "AUTH",
  ROOM_SETTING: "ROOM_SETTING",
  ROOM_MAKING: "ROOM_MAKING",
  SIGN_UP: <SignUpModal />,
};

function ModalLayout() {
  if (typeof document === "undefined") return <></>;
  const [modal, setModal] = useRecoilState(modalState);
  const modalRoot: HTMLElement | null = document.querySelector("#modal");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    modal.map((item, modalIndex) => {
      return (
        <div
          className="fixed top-0 left-0 min-w-screen w-full min-h-screen h-full bg-[rgba(0,0,0,0.25)]"
          data-testid="modal-background"
          onClick={() =>
            setModal(() => modal.filter((_, index) => modalIndex !== index))
          }
        >
          {modalBody[item]}
        </div>
      );
    }),
    modalRoot,
  );
}

export default ModalLayout;

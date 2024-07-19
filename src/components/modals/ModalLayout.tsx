"use client";

import ModalState from "@/atoms/Modal/atom";
import { ModalBodyType } from "@/atoms/Modal/type";
import React, { ReactNode, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useRecoilState } from "recoil";

const modalBody: { [x in ModalBodyType]: ReactNode } = {
  SETTING: "SETTING",
  HELP: "HELP",
  MY_INFO: "MY_INFO",
  AUTH: "AUTH",
  ROOM_SETTING: "ROOM_SETTING",
  ROOM_MAKING: "ROOM_MAKING",
};

function ModalLayout() {
  const [modal, setModal] = useRecoilState(ModalState);
  const modalRoot: HTMLElement | null = document.querySelector("#modal");
  if (!modalRoot) return null;
  return ReactDOM.createPortal(
    <div
      className="fixed top-0 left-0 min-w-screen w-full min-h-screen h-full bg-[rgba(0,0,0,0.25)]"
      data-testid="modal-background"
      onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] bg-white p-8 rounded-30 focus-visible:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">{modalBody[modal.body!]}</div>
      </div>
    </div>,
    modalRoot,
  );
}

export default ModalLayout;

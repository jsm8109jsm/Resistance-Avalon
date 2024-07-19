"use client";

import { ReactNode } from "react";
import ModalLayout from "../modals/ModalLayout";
import { useRecoilState } from "recoil";
import ModalState from "@/atoms/Modal/atom";

function PortalProvider({ children }: { children: ReactNode }) {
  const [modal] = useRecoilState(ModalState);
  return (
    <>
      {children} {modal.isOpen && <ModalLayout />}
    </>
  );
}

export default PortalProvider;

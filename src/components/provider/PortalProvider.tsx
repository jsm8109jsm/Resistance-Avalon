"use client";

import { ReactNode } from "react";
import ModalLayout from "../modals/ModalLayout";

function PortalProvider({ children }: { children: ReactNode }) {
  return (
    <>
      {children} <ModalLayout />
    </>
  );
}

export default PortalProvider;

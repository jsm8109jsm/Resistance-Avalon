"use client";

import ModalState from "@/atoms/Modal/atom";
import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const response = await axios.post("/api/game/code", {
  //         name: "test",
  //         password: "P@ssw0rd",
  //       });
  //       console.log(response);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   })();
  // }, []);
  const [, setModal] = useRecoilState(ModalState);
  return (
    <button
      onClick={() => {
        setModal(() => ({ isOpen: true, body: "SETTING" }));
      }}
    >
      test
    </button>
  );
}

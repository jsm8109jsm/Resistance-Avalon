"use client";

import ModalState from "@/atoms/Modal/atom";
import fireAuth from "@/firebase/fireAuth";
import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
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
  const googleLogin = async () => {
    const provider = new GoogleAuthProvider(); // provider 구글 설정
    const data = await signInWithPopup(fireAuth, provider); // 팝업창 띄워서 로그인

    console.log(data.user);

    try {
      const response = await axios.post("/api/auth/google", data.user);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const facebookLogin = async () => {
  //   const provider = new FacebookAuthProvider(); // provider 구글 설정
  //   const data = await signInWithPopup(fireAuth, provider); // 팝업창 띄워서 로그인

  //   console.log(data.user);
  // };
  const [, setModal] = useRecoilState(ModalState);
  return (
    <>
      <button
        onClick={() => {
          setModal(() => ({ isOpen: true, body: "SETTING" }));
        }}
      >
        test
      </button>
      <button onClick={googleLogin}>google login test</button>
      {/* <button onClick={facebookLogin}>facebook login test</button> */}
    </>
  );
}

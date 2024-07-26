"use client";

import { useLogin } from "@/apis/auth/hooks";
import { useGetMyInfo } from "@/apis/user/hooks";
import modalState from "@/atoms/modal/atom";
import fireAuth from "@/firebase/fireAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRecoilState } from "recoil";

export default function Home() {
  const { mutate } = useLogin();
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
    mutate(data.user);
  };
  const { data, isSuccess, isLoading } = useGetMyInfo();
  const [modal, setModal] = useRecoilState(modalState);
  if (isLoading) return <></>;
  return (
    <>
      {/* <button
        onClick={() => {
          setModal((prev) => [...prev, "SETTING"]);
        }}
      >
        test
      </button> */}
      {localStorage.accessToken && isSuccess ? (
        <button onClick={() => setModal((prev) => [...prev, "MY_INFO"])}>
          <Image
            src={data.profileImg}
            alt={`${data.nickname}의 프로필 사진`}
            width={50}
            height={50}
            className="rounded-full"
          />
        </button>
      ) : (
        <button
          onClick={googleLogin}
          className="flex gap-2 p-2 items-center justify-center rounded-lg hover:bg-[#F2F2F2] bg-white shadow-sm transition"
        >
          <Image
            src={"/images/google.svg"}
            alt={"구글 로그인"}
            width={24}
            height={24}
          />
          구글 계정으로 로그인하기
        </button>
      )}
      {/* <button onClick={facebookLogin}>facebook login test</button> */}
    </>
  );
}

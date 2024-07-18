import { createDocWithDocId, readDoc } from "@/functions/controlDoc";
import { NextRequest, NextResponse } from "next/server";

/**
 * 영어 소문자, 영어 대문자, 숫자로 이루어진 랜덤한 문자열을 생성한다.
 * @param len 문자열 길이
 */
const generateRandomString = (len: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < len; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

/**
 * 게임방을 생성하고 유저에게 게임 방 코드를 제공한다.
 * @param req 방 생성 요청
 * @returns 생성된 방 코드
 */
export async function POST(req: NextRequest) {
  const body: { name: string; password: string } = await req.json();
  while (true) {
    const randomCode = generateRandomString(6);
    const roomSnap = await readDoc("room", randomCode);
    if (!roomSnap.exists()) {
      createDocWithDocId("room", body, randomCode);
      return NextResponse.json({
        code: randomCode,
      });
    }
  }
}

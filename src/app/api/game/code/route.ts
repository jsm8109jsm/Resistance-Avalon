import { NextRequest, NextResponse } from "next/server";

const generateRandomString = (num: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < num; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

export async function GET(req?: NextRequest) {
  const randomCode = generateRandomString(6);
  console.log(randomCode);
  return NextResponse.json({
    code: randomCode,
  });
}

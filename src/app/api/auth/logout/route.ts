import fireAuth from "@/firebase/fireAuth";
import { signOut } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest) {
  const idToken = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const response = await signOut(fireAuth);
    console.log("response", response);
    return NextResponse.json({ message: "로그아웃하였습니다." });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error", code: 500 });
  }
}

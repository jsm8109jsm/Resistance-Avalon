import admin from "@/firebase/firebaseAdmin";
import { setDocHandler } from "@/functions/docHandlers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const idToken = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const { nickname }: { nickname: string } = await req.json();

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid } = decodedToken;
    console.log(uid);
    setDocHandler("user", { nickname }, uid);
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({});
}

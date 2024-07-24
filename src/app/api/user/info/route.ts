import admin from "@/firebase/firebaseAdmin";
import { getDocHandler } from "@/functions/docHandlers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const idToken = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const { uid } = decodedToken;
    console.log(uid);
    const userSnap = await getDocHandler("user", uid);
    return NextResponse.json({ ...userSnap.data() });
  } catch (error: any) {
    console.log(error.errorInfo.code);
    if (error.errorInfo.code.startsWith("auth"))
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    return NextResponse.json({ error: "Internal Server Error", code: 500 });
  }
}

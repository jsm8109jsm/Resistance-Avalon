import admin from "@/firebase/firebaseAdmin";
import { getDocHandler } from "@/functions/docHandlers";
import { User } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";

interface GoogleUser extends User {
  stsTokenManager: {
    accessToken: string;
    refreshToken: string;
    expirationTime: number;
  };
}

export async function POST(req: NextRequest) {
  const body: GoogleUser = await req.json();
  const { uid, stsTokenManager } = body;
  const userSnap = await getDocHandler("user", uid);
  if (!userSnap.exists()) {
    return NextResponse.json({ ...stsTokenManager, isSignUp: true });
  }
  // console.log(uid, stsTokenManager);
  // createDocWithDocId("user", body, uid);
  // try {
  //   const userRecord = await admin.auth().getUser(uid);
  //   console.log(userRecord);
  // } catch (error) {
  //   console.log(error);
  // }

  return NextResponse.json({ ...stsTokenManager });
}

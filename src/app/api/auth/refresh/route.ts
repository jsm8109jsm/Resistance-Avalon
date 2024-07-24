import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const refreshToken = req.headers.get("Authorization")?.split("Bearer ")[1];
  if (!refreshToken)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  try {
    const response = await axios.post(
      `https://securetoken.googleapis.com/v1/token?key=${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
      {
        grant_type: "refresh_token",
        refresh_token: refreshToken,
      },
    );
    return NextResponse.json({ accessToken: response.data.access_token });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Internal Server Error", code: 500 });
  }
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const header = req.headers.get("Authorization");
  return NextResponse.json({ req, body, header });
}

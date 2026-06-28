import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const params = req.nextUrl.searchParams;

  const status = params.get("status");
  const userId = params.get("user_id");
  const transId = params.get("trans_id");
  const amount = params.get("amount_local");

  console.log("========== CPX CALLBACK ==========");
  console.log({
    status,
    userId,
    transId,
    amount,
  });

  return NextResponse.json({
    success: true,
  });
}
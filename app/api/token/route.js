// app/api/token/route.js

import { currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { StreamChat } from "stream-chat";

const serverClient = StreamChat.getInstance(
  process.env.NEXT_PUBLIC_STREAM_API_KEY,
  process.env.STREAM_SECRET_KEY
);

export async function POST(req) {
  const body = await req.json();

  const userId = body.userId;
  const name = body.name;

  if (!userId || !name) {
    return NextResponse.json({ error: "Missing user info" }, { status: 400 });
  }

  const user = await currentUser();
  if (!user || user.id !== userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // ✅ Upsert user as admin for full chat access during dev
  await serverClient.upsertUser({
    id: userId,
    name,
    role: "user", // ✅ gives all permissions
  });

  const token = serverClient.createToken(userId);

  return NextResponse.json({ token });
}

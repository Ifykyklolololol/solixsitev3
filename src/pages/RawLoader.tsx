import { NextResponse } from 'next/server';

export async function GET() {
  const lua = `loadstring(game:HttpGet("https://raw.githubusercontent.com/debunked69/solixloader/refs/heads/main/solix%20v2%20new%20loader.lua"))()`;

  return new NextResponse(lua, {
    headers: { "Content-Type": "text/plain" }
  });
}

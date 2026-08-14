import { NextResponse } from 'next/server';

export async function POST() {
  const accessToken = 'mock-refreshed-access-token-' + Date.now();
  const refreshToken = 'mock-refreshed-token-' + Date.now();

  const response = NextResponse.json({
    accessToken,
    refreshToken,
  });

  response.cookies.set('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
  });

  return response;
}

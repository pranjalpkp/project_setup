import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Mock tokens and user object
    const accessToken = 'mock-access-token-' + Date.now();
    const refreshToken = 'mock-refresh-token-' + Date.now();

    const user = {
      id: 'user-123',
      email: email,
      firstName: email.split('@')[0] || 'User',
      lastName: 'Enterprise',
      roles: ['USER', 'ADMIN'],
      permissions: ['READ_DASHBOARD', 'MANAGE_USERS'],
      twoFactorEnabled: false,
      emailVerified: true,
      lastLogin: new Date().toISOString(),
    };

    const response = NextResponse.json({
      accessToken,
      refreshToken,
      user,
    });

    // Set cookie for middleware access
    response.cookies.set('accessToken', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
    });

    return response;
  } catch {
    return NextResponse.json(
      { message: 'Invalid request body' },
      { status: 400 }
    );
  }
}

import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, firstName, lastName } = body;

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    return NextResponse.json({
      message: 'Registration successful! Verification email sent.',
      user: {
        id: 'user-' + Date.now(),
        email,
        firstName: firstName || 'User',
        lastName: lastName || '',
        roles: ['USER'],
        emailVerified: false,
      },
    });
  } catch {
    return NextResponse.json(
      { message: 'Registration failed' },
      { status: 400 }
    );
  }
}

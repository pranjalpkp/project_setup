import { NextRequest } from 'next/server';
import { jwtDecode } from 'jwt-decode';

export interface DecodedToken {
  sub?: string;
  roles?: string[];
  exp?: number;
  [key: string]: unknown;
}

export async function authenticate(request: NextRequest): Promise<DecodedToken | null> {
  const token = request.cookies.get('accessToken')?.value || 
                request.headers.get('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return null;
  }

  try {
    const decoded = jwtDecode<DecodedToken>(token);
    const currentTime = Date.now() / 1000;

    if (decoded.exp && decoded.exp < currentTime) {
      return null;
    }

    return decoded;
  } catch {
    return null;
  }
}
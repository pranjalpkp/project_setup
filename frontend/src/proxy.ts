import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { authenticate } from './middleware/auth';
import { rateLimit } from './middleware/rateLimit';

// Protected routes that require authentication
const protectedRoutes = ['/dashboard', '/profile', '/admin', '/settings'];
// Auth routes (redirect to dashboard if already authenticated)
const authRoutes = ['/login', '/register', '/forgot-password'];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip proxy for static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 1. Rate Limiting
  const rateLimitResult = await rateLimit(request);
  if (rateLimitResult) return rateLimitResult;

  // 2. Check route protected status
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route));

  // 3. Authentication check
  const authUser = await authenticate(request);
  const isAuthenticated = !!authUser;

  // 4. Handle route access
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // 5. Role-based access for admin routes
  if (pathname.startsWith('/admin') && isAuthenticated) {
    const roles = authUser?.roles || [];
    if (!roles.includes('ADMIN')) {
      return NextResponse.json(
        { error: 'Admin access required' },
        { status: 403 }
      );
    }
  }

  // 6. Add security headers to all responses
  const response = NextResponse.next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  
  return response;
}

export default proxy;

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:jpg|jpeg|gif|png|svg|css|js|webp)$).*)',
  ],
};

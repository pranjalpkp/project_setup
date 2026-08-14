import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store (use Redis for production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

export async function rateLimit(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
             request.headers.get('x-real-ip') || 
             '127.0.0.1';
  const key = `rate-limit:${ip}`;
  const now = Date.now();
  const windowMs = parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT_WINDOW || '60000');
  const maxRequests = parseInt(process.env.NEXT_PUBLIC_RATE_LIMIT_MAX || '100');

  const record = rateLimitStore.get(key);

  if (!record) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return null;
  }

  if (now > record.resetTime) {
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + windowMs,
    });
    return null;
  }

  if (record.count >= maxRequests) {
    return NextResponse.json(
      { error: 'Too many requests, please try again later.' },
      { 
        status: 429,
        headers: {
          'Retry-After': String(Math.ceil((record.resetTime - now) / 1000)),
          'X-RateLimit-Limit': String(maxRequests),
          'X-RateLimit-Remaining': '0',
          'X-RateLimit-Reset': new Date(record.resetTime).toISOString(),
        },
      }
    );
  }

  record.count++;
  return null;
}

// Cleanup old records periodically
setInterval(() => {
  const now = Date.now();
  rateLimitStore.forEach((value, key) => {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  });
}, 60000);
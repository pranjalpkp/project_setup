'use client';

import { useEffect } from 'react';
import { CSRFProtection as CSRFService } from '@/lib/security/csrf';

export function CSRFProtection() {
  useEffect(() => {
    // Generate CSRF token on client-side
    CSRFService.generateToken();
  }, []);

  return null;
}
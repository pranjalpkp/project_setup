'use client';

import { useRoleAccess } from '@/hooks/useRoleAccess';
import { ReactNode } from 'react';

interface RoleGuardProps {
  roles?: string[];
  permissions?: string[];
  children: ReactNode;
  fallback?: ReactNode;
  requireAll?: boolean;
}

export function RoleGuard({
  roles = [],
  permissions = [],
  children,
  fallback = null,
  requireAll = false,
}: RoleGuardProps) {
  const { hasAnyRole, hasAllRoles, hasAnyPermission, hasAllPermissions } = useRoleAccess();

  let hasAccess = true;

  if (roles.length > 0) {
    if (requireAll) {
      hasAccess = hasAccess && hasAllRoles(roles);
    } else {
      hasAccess = hasAccess && hasAnyRole(roles);
    }
  }

  if (permissions.length > 0) {
    if (requireAll) {
      hasAccess = hasAccess && hasAllPermissions(permissions);
    } else {
      hasAccess = hasAccess && hasAnyPermission(permissions);
    }
  }

  if (!hasAccess) {
    return <>{fallback}</>;
  }

  return <>{children}</>;
}
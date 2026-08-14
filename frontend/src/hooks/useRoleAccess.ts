import { useAuthStore } from '@/store/slices/authSlice';
import { useMemo } from 'react';

export function useRoleAccess() {
  const { user } = useAuthStore();

  const roles = useMemo(() => user?.roles || [], [user]);
  const permissions = useMemo(() => user?.permissions || [], [user]);

  const hasRole = (role: string): boolean => {
    return roles.includes(role);
  };

  const hasAnyRole = (roleList: string[]): boolean => {
    return roleList.some(role => roles.includes(role));
  };

  const hasAllRoles = (roleList: string[]): boolean => {
    return roleList.every(role => roles.includes(role));
  };

  const hasPermission = (permission: string): boolean => {
    return permissions.includes(permission);
  };

  const hasAnyPermission = (permissionList: string[]): boolean => {
    return permissionList.some(perm => permissions.includes(perm));
  };

  const hasAllPermissions = (permissionList: string[]): boolean => {
    return permissionList.every(perm => permissions.includes(perm));
  };

  const isAdmin = useMemo(() => hasRole('ADMIN'), [roles]);
  const isUser = useMemo(() => hasRole('USER'), [roles]);
  const isManager = useMemo(() => hasRole('MANAGER'), [roles]);

  return {
    roles,
    permissions,
    hasRole,
    hasAnyRole,
    hasAllRoles,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions,
    isAdmin,
    isUser,
    isManager,
  };
}
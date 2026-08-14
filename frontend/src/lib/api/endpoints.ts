export const API_ENDPOINTS = {
  // Auth
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    REFRESH: '/auth/refresh',
    VERIFY_EMAIL: '/auth/verify-email',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password',
    TWO_FA: {
      ENABLE: '/auth/2fa/enable',
      DISABLE: '/auth/2fa/disable',
      VERIFY: '/auth/2fa/verify',
      GENERATE_SECRET: '/auth/2fa/generate-secret',
    },
    SOCIAL: {
      GOOGLE: '/auth/social/google',
      FACEBOOK: '/auth/social/facebook',
    },
  },

  // User
  USER: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    CHANGE_PASSWORD: '/users/change-password',
    UPDATE_PREFERENCES: '/users/preferences',
    ACTIVITY_LOG: '/users/activity-log',
  },

  // Files
  FILE: {
    UPLOAD: '/files/upload',
    UPLOAD_MULTIPLE: '/files/upload-multiple',
    DELETE: '/files/delete',
    GET: '/files/get',
    DOWNLOAD: '/files/download',
    SHARE: '/files/share',
  },

  // Audit
  AUDIT: {
    LOGS: '/audit/logs',
    EXPORT: '/audit/export',
    CLEAR: '/audit/clear',
  },

  // Admin
  ADMIN: {
    USERS: '/admin/users',
    USER_DETAIL: '/admin/users/:id',
    ROLES: '/admin/roles',
    PERMISSIONS: '/admin/permissions',
    SYSTEM_LOGS: '/admin/system-logs',
    SECURITY_SETTINGS: '/admin/security-settings',
  },

  // Settings
  SETTINGS: {
    GENERAL: '/settings/general',
    NOTIFICATION: '/settings/notification',
    SECURITY: '/settings/security',
    PRIVACY: '/settings/privacy',
  },
} as const;
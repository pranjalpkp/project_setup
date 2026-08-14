'use client';

import { useAuth } from '@/hooks/useAuth';
import { RoleGuard } from '@/components/security/RoleGuard';
import { 
  UserIcon, 
  ShieldCheckIcon, 
  KeyIcon, 
  ArrowRightOnRectangleIcon,
  CheckCircleIcon 
} from '@heroicons/react/24/outline';

export default function DashboardPage() {
  const { user, logout } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-8 rounded-2xl shadow-xl text-white border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <div className="flex items-center space-x-3 mb-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5">
              <CheckCircleIcon className="w-4 h-4" /> Active Session
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              Role: {user?.roles?.join(', ') || 'USER'}
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight">
            Welcome back, {user?.firstName ? `${user.firstName} ${user.lastName || ''}` : 'Enterprise User'}!
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Logged in as <span className="text-slate-200 font-medium">{user?.email || 'user@example.com'}</span>
          </p>
        </div>

        <button
          onClick={() => logout()}
          className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white font-medium text-sm transition shadow-lg shadow-red-600/20"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
      </div>

      {/* Grid Status Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800">
          <div className="p-3 w-fit bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-xl mb-4">
            <UserIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Profile Security</h3>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
            2FA: {user?.twoFactorEnabled ? 'Enabled' : 'Disabled'}<br />
            Email Verified: {user?.emailVerified ? 'Verified' : 'Pending'}
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800">
          <div className="p-3 w-fit bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 rounded-xl mb-4">
            <ShieldCheckIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Session Security</h3>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
            CSRF Protection: Active<br />
            Inactivity Timeout: 15 Minutes
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800">
          <div className="p-3 w-fit bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 rounded-xl mb-4">
            <KeyIcon className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Access Rights</h3>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
            Assigned Roles: {user?.roles?.length || 1}<br />
            Permissions: {user?.permissions?.length || 0} granted
          </p>
        </div>
      </div>

      {/* Admin Panel (Role Guard Demo) */}
      <RoleGuard roles={['ADMIN']} fallback={
        <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-dashed border-gray-300 dark:border-slate-800 text-center">
          <p className="text-sm text-gray-500 dark:text-slate-400">
            🔒 Administrative controls are restricted to users with the <span className="font-semibold text-gray-700 dark:text-slate-300">ADMIN</span> role.
          </p>
        </div>
      }>
        <div className="p-6 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-200">
          <h3 className="text-lg font-bold text-amber-400 mb-2">⚡ Administrator Console</h3>
          <p className="text-sm">You have elevated administrative privileges. User management and system log capabilities are unlocked.</p>
        </div>
      </RoleGuard>
    </div>
  );
}

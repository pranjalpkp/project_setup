'use client';

import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { 
  ShieldCheckIcon, 
  LockClosedIcon, 
  KeyIcon, 
  ArrowRightIcon, 
  UserCircleIcon 
} from '@heroicons/react/24/outline';

export default function HomePage() {
  const { isAuthenticated, user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between selection:bg-blue-500 selection:text-white">
      {/* Top Header Navigation */}
      <header className="border-b border-slate-800/80 bg-slate-950/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl shadow-lg shadow-blue-500/20">
              <ShieldCheckIcon className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              SecureSphere Enterprise
            </span>
          </div>

          <nav className="flex items-center space-x-4">
            {isAuthenticated ? (
              <Link
                href="/dashboard"
                className="flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-md shadow-blue-600/30 transition duration-200"
              >
                <UserCircleIcon className="w-5 h-5" />
                <span>Dashboard ({user?.firstName || 'User'})</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-5 py-2.5 rounded-xl text-slate-300 hover:text-white font-medium transition hover:bg-slate-900"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium shadow-lg shadow-blue-600/25 transition duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-20 flex flex-col justify-center items-center text-center">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8 animate-pulse">
          <LockClosedIcon className="w-4 h-4" />
          <span>Enterprise Grade Zero-Trust Security</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-tight">
          Next-Generation Security & Access Control Platform
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl font-normal leading-relaxed">
          Comprehensive authentication, role-based access management, AES payload encryption, CSRF defense, and rate-limiting built to scale seamlessly.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          {isAuthenticated ? (
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 transition duration-200"
            >
              <span>Go to Dashboard</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-lg shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2 transition duration-200"
              >
                <span>Access Console</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/register"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-200 font-semibold text-lg transition duration-200"
              >
                Create Account
              </Link>
            </>
          )}
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-left">
          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
            <div className="p-3 w-fit bg-blue-500/10 rounded-xl text-blue-400 mb-5">
              <KeyIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">JWT Authentication</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Secure dual-token authentication flow with short-lived access keys and automated background refresh handling.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
            <div className="p-3 w-fit bg-indigo-500/10 rounded-xl text-indigo-400 mb-5">
              <ShieldCheckIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Role & Permission Guards</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Fine-grained RBAC enforcing permissions dynamically across route middleware and UI components.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition">
            <div className="p-3 w-fit bg-emerald-500/10 rounded-xl text-emerald-400 mb-5">
              <LockClosedIcon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Defense-In-Depth Security</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Built-in XSS input sanitization, anti-CSRF token verification, rate limiting, and session timeout alerts.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-8 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} SecureSphere Enterprise. All rights reserved.</p>
      </footer>
    </div>
  );
}

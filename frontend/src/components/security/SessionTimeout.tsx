'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Modal } from '@/components/common/Modal';

interface SessionTimeoutProps {
  timeoutMinutes?: number;
  warningMinutes?: number;
}

export function SessionTimeout({
  timeoutMinutes = 15,
  warningMinutes = 2,
}: SessionTimeoutProps) {
  const [timeLeft, setTimeLeft] = useState(timeoutMinutes * 60);
  const [showWarning, setShowWarning] = useState(false);
  const { refreshToken, logout } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          logout();
          return 0;
        }
        
        // Show warning when time left equals warning time
        if (prev === warningMinutes * 60) {
          setShowWarning(true);
        }
        
        return prev - 1;
      });
    }, 1000);

    // Reset timer on user activity
    const resetTimer = () => {
      setTimeLeft(timeoutMinutes * 60);
      setShowWarning(false);
    };

    const activityEvents = ['mousedown', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(event => {
      document.addEventListener(event, resetTimer);
    });

    return () => {
      clearInterval(timer);
      activityEvents.forEach(event => {
        document.removeEventListener(event, resetTimer);
      });
    };
  }, [timeoutMinutes, warningMinutes, logout]);

  const handleExtendSession = async () => {
    const res = await refreshToken();
    if (res?.success) {
      setTimeLeft(timeoutMinutes * 60);
      setShowWarning(false);
    }
  };

  if (!showWarning) return null;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <Modal isOpen={showWarning} onClose={() => {}}>
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-4">Session Expiring Soon</h3>
        <p className="text-gray-600 mb-4">
          Your session will expire in {minutes}:{seconds.toString().padStart(2, '0')}.
          Would you like to extend it?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => logout()}
            className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
          >
            Logout
          </button>
          <button
            onClick={handleExtendSession}
            className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Extend Session
          </button>
        </div>
      </div>
    </Modal>
  );
}
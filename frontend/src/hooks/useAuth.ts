import { useAuthStore } from '@/store/slices/authSlice';
import { apiClient } from '@/lib/api/axios';
import { API_ENDPOINTS } from '@/lib/api/endpoints';
import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

interface RegisterData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export function useAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { 
    user, 
    isAuthenticated, 
    setUser, 
    setTokens,
    clearTokens,
    logout: logoutStore 
  } = useAuthStore();

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post<{ accessToken: string; refreshToken: string; user: any }>(
        API_ENDPOINTS.AUTH.LOGIN, 
        credentials
      );
      
      const { accessToken, refreshToken, user } = response;
      setTokens(accessToken, refreshToken);
      setUser(user);

      toast.success('Login successful!');
      router.push('/dashboard');
      
      return { success: true, user };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Login failed';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [setTokens, setUser, router]);

  const register = useCallback(async (data: RegisterData) => {
    try {
      setLoading(true);
      setError(null);

      const response = await apiClient.post(API_ENDPOINTS.AUTH.REGISTER, data);
      
      toast.success('Registration successful! Please verify your email.');
      router.push('/verify-email');
      
      return { success: true, data: response };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Registration failed';
      setError(errorMessage);
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, [router]);

  const logout = useCallback(async () => {
    try {
      await apiClient.post(API_ENDPOINTS.AUTH.LOGOUT);
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      clearTokens();
      logoutStore();
      toast.success('Logged out successfully');
      router.push('/login');
    }
  }, [clearTokens, logoutStore, router]);

  const refreshToken = useCallback(async () => {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      if (!refreshToken) throw new Error('No refresh token');

      const response = await apiClient.post<{ accessToken: string; refreshToken: string }>(
        API_ENDPOINTS.AUTH.REFRESH, 
        { refreshToken }
      );

      const { accessToken, refreshToken: newRefreshToken } = response;
      setTokens(accessToken, newRefreshToken);
      
      return { success: true };
    } catch (error) {
      logout();
      return { success: false };
    }
  }, [setTokens, logout]);

  const changePassword = useCallback(async (oldPassword: string, newPassword: string) => {
    try {
      setLoading(true);
      await apiClient.put(API_ENDPOINTS.USER.CHANGE_PASSWORD, {
        oldPassword,
        newPassword,
      });
      toast.success('Password changed successfully');
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Password change failed';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const forgotPassword = useCallback(async (email: string) => {
    try {
      setLoading(true);
      await apiClient.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email });
      toast.success('Password reset email sent');
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Failed to send reset email';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (token: string, newPassword: string) => {
    try {
      setLoading(true);
      await apiClient.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, {
        token,
        newPassword,
      });
      toast.success('Password reset successful');
      return { success: true };
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 'Password reset failed';
      toast.error(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    user,
    isAuthenticated,
    loading,
    error,
    login,
    register,
    logout,
    refreshToken,
    changePassword,
    forgotPassword,
    resetPassword,
  };
}
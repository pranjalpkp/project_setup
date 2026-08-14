import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';
import { CSRFProtection } from '../security/csrf';
import { EncryptionService } from '../security/encryption';
import { toast } from 'react-hot-toast';

interface QueueItem {
  resolve: (value: any) => void;
  reject: (reason: any) => void;
  config: any;
}

class ApiClient {
  private client: AxiosInstance;
  private isRefreshing = false;
  private requestQueue: QueueItem[] = [];

  constructor() {
    this.client = axios.create({
      baseURL: process.env.NEXT_PUBLIC_API_URL,
      timeout: 30000,
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request Interceptor
    this.client.interceptors.request.use(
      async (config) => {
        // Add JWT token
        const token = this.getAccessToken();
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        // Add CSRF token for non-GET requests
        if (config.method !== 'get') {
          const csrfToken = CSRFProtection.getToken();
          if (csrfToken) {
            config.headers['X-CSRF-TOKEN'] = csrfToken;
          }
        }

        // Encrypt sensitive data if header is present
        if (config.data && config.method !== 'get' && config.headers?.['X-Encrypt-Body'] === 'true') {
          config.data = EncryptionService.encrypt(config.data);
        }

        return config;
      },
      (error) => Promise.reject(error)
    );

    // Response Interceptor
    this.client.interceptors.response.use(
      (response) => {
        // Decrypt response data if encrypted
        if (response.data?.encrypted) {
          response.data = EncryptionService.decrypt(response.data.payload);
        }
        return response;
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as any;

        // Handle 401 - Token Refresh
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          return this.handleTokenRefresh(originalRequest);
        }

        // Handle 403 - CSRF or Permission
        if (error.response?.status === 403) {
          toast.error('Access denied or CSRF token expired');
          const responseData = error.response?.data as { message?: string } | undefined;
          if (responseData?.message?.includes('CSRF')) {
            this.refreshCSRFToken();
          }
        }

        // Handle 429 - Rate Limiting
        if (error.response?.status === 429) {
          toast.error('Too many requests. Please wait before trying again.');
        }

        // Handle 500 - Server Error
        if (error.response && error.response.status >= 500) {
          toast.error('Server error. Please try again later.');
        }

        return Promise.reject(error);
      }
    );
  }

  private async handleTokenRefresh(originalRequest: any): Promise<any> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      try {
        const refreshToken = this.getRefreshToken();
        if (!refreshToken) {
          throw new Error('No refresh token available');
        }

        const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
          refreshToken,
        });

        const { accessToken, refreshToken: newRefreshToken } = response.data;
        this.setTokens(accessToken, newRefreshToken);
        this.isRefreshing = false;

        // Retry all queued requests
        this.processQueue(null, accessToken);

        // Retry original request
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return this.client(originalRequest);
      } catch (error) {
        this.isRefreshing = false;
        this.processQueue(error, null);
        this.clearTokens();
        window.location.href = '/login?session=expired';
        return Promise.reject(error);
      }
    } else {
      // Queue request while token is being refreshed
      return new Promise((resolve, reject) => {
        this.requestQueue.push({ resolve, reject, config: originalRequest });
      });
    }
  }

  private processQueue(error: any, token: string | null) {
    while (this.requestQueue.length) {
      const request = this.requestQueue.shift();
      if (request) {
        if (error) {
          request.reject(error);
        } else if (token) {
          request.config.headers.Authorization = `Bearer ${token}`;
          request.resolve(this.client(request.config));
        }
      }
    }
  }

  private getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  private getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private setTokens(accessToken: string, refreshToken: string): void {
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  private clearTokens(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  }

  private refreshCSRFToken(): void {
    CSRFProtection.generateToken();
  }

  // Public methods
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.get<T>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.post<T>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.put<T>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.patch<T>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.client.delete<T>(url, config);
    return response.data;
  }

  async upload<T>(url: string, file: File, config?: AxiosRequestConfig): Promise<T> {
    const formData = new FormData();
    formData.append('file', file);
    
    const uploadConfig = {
      ...config,
      headers: {
        ...config?.headers,
        'Content-Type': 'multipart/form-data',
      },
    };
    
    const response = await this.client.post<T>(url, formData, uploadConfig);
    return response.data;
  }
}

export const apiClient = new ApiClient();
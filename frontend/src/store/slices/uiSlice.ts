import { create } from 'zustand';

interface UIState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  notifications: Notification[];
  isModalOpen: boolean;
  modalContent: React.ReactNode | null;
  loadingOverlay: boolean;
  toastMessage: { message: string; type: 'success' | 'error' | 'info' } | null;

  // Actions
  toggleTheme: () => void;
  setSidebarOpen: (open: boolean) => void;
  addNotification: (notification: Notification) => void;
  removeNotification: (id: string) => void;
  clearNotifications: () => void;
  openModal: (content: React.ReactNode) => void;
  closeModal: () => void;
  setLoadingOverlay: (loading: boolean) => void;
  showToast: (message: string, type: 'success' | 'error' | 'info') => void;
  clearToast: () => void;
}

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  timestamp: Date;
  read: boolean;
}

export const useUIStore = create<UIState>((set) => ({
  theme: 'light',
  sidebarOpen: true,
  notifications: [],
  isModalOpen: false,
  modalContent: null,
  loadingOverlay: false,
  toastMessage: null,

  toggleTheme: () => set((state) => ({ 
    theme: state.theme === 'light' ? 'dark' : 'light' 
  })),

  setSidebarOpen: (open) => set({ sidebarOpen: open }),

  addNotification: (notification) => set((state) => ({
    notifications: [notification, ...state.notifications],
  })),

  removeNotification: (id) => set((state) => ({
    notifications: state.notifications.filter(n => n.id !== id),
  })),

  clearNotifications: () => set({ notifications: [] }),

  openModal: (content) => set({ 
    isModalOpen: true, 
    modalContent: content 
  }),

  closeModal: () => set({ 
    isModalOpen: false, 
    modalContent: null 
  }),

  setLoadingOverlay: (loading) => set({ loadingOverlay: loading }),

  showToast: (message, type) => set({ 
    toastMessage: { message, type } 
  }),

  clearToast: () => set({ toastMessage: null }),
}));
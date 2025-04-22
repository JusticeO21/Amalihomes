import { Toast, ToastType } from "./types";

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
let listeners: Listener[] = [];
let containerMounted = false;

const generateId = () => Math.random().toString(36).substring(2, 9);

const notifyListeners = () => {
  listeners.forEach((listener) => listener([...toasts]));
};

export const toastManager = {
  addToast: (message: string, type: ToastType) => {
    if (!containerMounted) {
      console.warn("ToastContainer not mounted. Toasts will not be displayed.");
      return;
    }

    const id = generateId();
    const newToast = { id, message, type };

    toasts = [...toasts, newToast];
    notifyListeners();
  },

  dismissToast: (id: string) => {
    toasts = toasts.filter((toast) => toast.id !== id);
    notifyListeners();
  },

  dismissAll: () => {
    toasts = [];
    notifyListeners();
  },

  subscribe: (listener: Listener) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },

  getToasts: () => [...toasts],

  setContainerMounted: (mounted: boolean) => {
    containerMounted = mounted;
  },
};

import { toastManager } from "./toast-manager";

const toast = (message: string = "default") => {
  toastManager.addToast(message, "info");
};

toast.success = (message: string = "success") => {
  toastManager.addToast(message, "success");
};

toast.error = (message: string = "error") => {
  toastManager.addToast(message, "error");
};

toast.warning = (message: string = "warning") => {
  toastManager.addToast(message, "warning");
};

toast.info = (message: string = "info") => {
  toastManager.addToast(message, "info");
};

toast.dismiss = (id?: string) => {
  if (id) {
    toastManager.dismissToast(id);
  } else {
    toastManager.dismissAll();
  }
};

export { toast };

"use client";
import { cva, VariantProps } from "class-variance-authority";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { ToastItem } from "./toast-item";
import { toastManager } from "./toast-manager";

const toastContainerVariants = cva("fixed z-50 flex flex-col gap-4 sm:w-fit", {
  variants: {
    position: {
      "top-left": "top-4 left-0 sm:left-4",
      "top-middle": "top-4 sm:w-full items-center",
      "top-right": "top-4 right-0 sm:right-4",
      "bottom-left": "sm:bottom-4 left-0 sm:left-4",
      "bottom-middle": "sm:bottom-4 sm:w-full items-center",
      "bottom-right": "sm:bottom-4 right-0 sm:right-4",
    },
  },
  defaultVariants: {
    position: "top-right",
  },
});

type ContainerProps = VariantProps<typeof toastContainerVariants> & { duration?: number };

const ToastContainer = ({ position, duration = 2000 }: ContainerProps) => {
  const [toasts, setToasts] = useState(() => toastManager.getToasts());

  useEffect(() => {
    toastManager.setContainerMounted(true);
    const unsubscribe = toastManager.subscribe((newToasts) => {
      setToasts(newToasts);
    });

    return () => {
      unsubscribe();
      toastManager.setContainerMounted(false);
      toastManager.dismissAll();
    };
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div className={cn(toastContainerVariants({ position }), "w-full items-center top-4 sm:top-auto")}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          duration={duration}
        />
      ))}
    </div>
  );
};

export default ToastContainer;

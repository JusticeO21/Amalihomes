"use client";
import { cva } from "class-variance-authority";
import { Check, Info, TriangleAlert, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "../../lib/utils";
import { toastManager } from "./toast-manager";
import { Toast } from "./types";

const toastVariants = cva(
  "rounded-md flex flex-col gap-16 p-16 transition-all duration-300 w-full sm:w-[355px] border",
  {
    variants: {
      type: {
        success: "bg-Green-fill text-Green-text border-green-100",
        error: "bg-Red-fill text-Red-text border-error-100",
        warning: "bg-Amber-fill text-Amber-text border-amber-100",
        info: "bg-info-fill text-info-text border-secondary-100",
      },
    },
  },
);
export const ToastItem = ({ toast, duration }: { toast: Toast; duration: number }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = useCallback(() => {
    setIsExiting(true);
    setTimeout(() => toastManager.dismissToast(toast.id), 300);
  }, [toast.id]);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleDismiss();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, handleDismiss]);

  const getIcon = useMemo(() => {
    const icons = {
      success: (
        <Check
          size={30}
          className="border border-success-100 p-4 rounded-full"
        />
      ),
      error: (
        <X
          size={30}
          className="border border-error-100 p-4 rounded-full"
        />
      ),
      warning: (
        <TriangleAlert
          size={30}
          className="border border-Amber-text p-4 rounded-full"
        />
      ),
      info: (
        <Info
          size={30}
          className="border border-secondary-100 p-4 rounded-full"
        />
      ),
    };
    return icons[toast.type];
  }, [toast.type]);

  return (
    <div
      className={cn(
        toastVariants({ type: toast.type }),
        isExiting ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
      )}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-8">
          {getIcon}
          <span className="capitalize font-bold text-18">{toast.type} Message</span>
        </div>

        <button
          onClick={handleDismiss}
          className="text-Red-text cursor-pointer"
          aria-label="Dismiss toast"
        >
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 text-neutral-500 ">
        <p className="text-body">{toast.message}</p>
      </div>
    </div>
  );
};

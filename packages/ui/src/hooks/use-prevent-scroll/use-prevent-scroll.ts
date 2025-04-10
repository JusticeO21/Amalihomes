import { useEffect } from "react";

let scrollLockCount = 0;
let originalOverflow: string;

export function usePreventBodyScroll(isOpen: boolean) {
  useEffect(() => {
    if (isOpen) {
      if (scrollLockCount === 0) {
        originalOverflow = window.getComputedStyle(document.body).overflow;
        document.body.style.overflow = "hidden";
      }
      scrollLockCount++;
    }

    return () => {
      if (isOpen) {
        scrollLockCount--;
        if (scrollLockCount === 0) {
          document.body.style.overflow = originalOverflow;
        }
      }
    };
  }, [isOpen]);
}

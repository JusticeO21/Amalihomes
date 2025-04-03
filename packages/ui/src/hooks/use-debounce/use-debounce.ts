import { useCallback, useRef } from "react";

/**
 * @param func - The function to debounce.
 * @param delay - The delay in milliseconds before executing the function.
 * @returns A debounced version of the function.
 */
export const useDebounce = <TArgs extends unknown[], T extends (...args: TArgs) => void>(func: T, delay: number) => {
  const timerRef = useRef<number | null>(null);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        func(...args);
      }, delay);
    },
    [func, delay],
  );
};

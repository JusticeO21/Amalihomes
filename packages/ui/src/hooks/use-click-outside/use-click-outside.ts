import { useEffect } from "react";

/**
 * Hook to detect clicks outside a given ref and trigger a callback.
 * @param ref - The element ref to detect outside clicks for.
 * @param callback - The function to call when an outside click is detected.
 */
export function useClickOutside(ref: React.RefObject<HTMLElement | null>, callback: () => void) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}

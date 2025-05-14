"use client";

import { useEffect, useState } from "react";

export interface LiveChatWindowProps {
  isWindowOpen?: boolean;
  children: React.ReactNode;
}

export const LiveChatWindow = ({ children, isWindowOpen = false }: LiveChatWindowProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isWindowOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isWindowOpen, isMobile]);

  if (!isWindowOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="bg-white sm:rounded-24 p-16 w-screen h-screen sm:w-393 sm:h-[calc(100dvh-100px)] sm:max-h-[750px]  chat-window-box-shadow relative overflow-auto flex flex-col gap-24 overflow-y-auto"
    >
      {children}
    </div>
  );
};

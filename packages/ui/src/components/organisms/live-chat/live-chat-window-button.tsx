"use client";

import { Image } from "../../atoms";

export interface LiveChatWindowButtonProps {
  isWindowOpen?: boolean;
  openWindow?: () => void;
  image?: {
    url?: string;
    alt?: string;
  };
}

export const LiveChatWindowButton = ({ isWindowOpen = false, image, openWindow }: LiveChatWindowButtonProps) => {
  if (isWindowOpen) return null;

  return (
    <button
      onClick={openWindow}
      className="rounded-full w-48 h-48 cursor-pointer  transition-transform duration-200 shadow-sm relative bottom-0"
    >
      <Image
        src={image?.url ?? ""}
        alt={image?.alt ?? ""}
        fill
        className="object-cover rounded-full w-48 h-48"
      />
    </button>
  );
};

import { cn } from "../../../lib/utils";

export const LiveChatWrapper = ({ children, isWindowOpen }: { children: React.ReactNode; isWindowOpen: boolean }) => {
  return (
    <div
      className={cn(
        "fixed bottom-15 right-21 lg:right-24 sm:right-30 z-2000",
        isWindowOpen && "bottom-0 right-0 sm:bottom-63 sm:right-16",
      )}
    >
      {children}
    </div>
  );
};

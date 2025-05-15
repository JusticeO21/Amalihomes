import { cn } from "../../../lib/utils";

export const LiveChatWrapper = ({ children, isWindowOpen }: { children: React.ReactNode; isWindowOpen: boolean }) => {
  return (
    <div
      className={cn(
        "fixed bottom-64 right-16 md:right-32 lg:right-64 z-2000",
        isWindowOpen && "bottom-0 right-0 sm:bottom-64",
      )}
    >
      {children}
    </div>
  );
};

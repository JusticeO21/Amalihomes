import { cn } from "../../../lib/utils";

export interface LiveChatPageWindowProps {
  isVisible: boolean;
  children: React.ReactNode;
  className?: string;
}

export const LiveChatPageWindow = ({ isVisible, children, className }: LiveChatPageWindowProps) => {
  const visibility = isVisible ? "" : "hidden";
  return <div className={cn("w-full h-full", visibility, className)}>{children}</div>;
};

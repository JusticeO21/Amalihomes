import { cn } from "../../../lib/utils";

export const FooterLinks = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "p-0 grid grid-cols-1 gap-20 md:grid-cols-4 md:justify-between lg:justify-normal lg:grid-cols-5 lg:gap-24",
        className,
      )}
    >
      {children}
    </div>
  );
};

import { cn } from "../../../lib/utils";

export const FooterNewsletterComponent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("p-0 flex flex-col lg:flex-row w-full justify-between gap-16", className)}>{children}</div>;
};

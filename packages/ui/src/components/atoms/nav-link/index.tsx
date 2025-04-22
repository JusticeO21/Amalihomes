import Link from "next/link";
import { cn } from "../../../lib/utils";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
}

export const NavLink = ({
  href,
  children,
  isActive,
  className,
  activeClassName = "border-b-2 text-brand border-brand-stroke-strong",
  inactiveClassName = "text-Grey-stroke-weaker hover:text-brand hover:border-transparent",
  ...props
}: NavLinkProps) => {
  return (
    <Link
      className={cn(
        "inline-block px-24 w-max py-12 group cursor-pointer disabled:text-Grey-fill",
        className,
        isActive ? activeClassName : inactiveClassName,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  );
};

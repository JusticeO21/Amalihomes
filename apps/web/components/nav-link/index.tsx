"use client";

import { Typography } from "@amalihomes/ui/components/typography";
import { cn } from "@amalihomes/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className }: NavLinkProps) => {
  const pathname = usePathname();
  let isActive = pathname === href;
  if (href !== "/") {
    isActive = pathname.startsWith(href);
  }

  const activeClassName = isActive ? "text-brand-text " : "text-[#888";

  return (
    <Link
      className={cn(
        "inline-block px-24 py-12 hover:text-brand-text",
        className,
        isActive && "border-b-2 border-brand-stroke-strong",
      )}
      href={href}
    >
      <Typography
        as="span"
        size="sm"
        className={cn("cursor-pointer", activeClassName)}
      >
        {children}
      </Typography>
    </Link>
  );
};

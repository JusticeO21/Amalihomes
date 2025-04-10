"use client";

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

  return (
    <Link
      className={cn(
        "inline-block px-24 py-12 text-Grey-stroke-weaker hover:text-brand group hover:border-transparent cursor-pointer disabled:text-Grey-fill",
        className,
        isActive && "border-b-2 text-brand border-brand-stroke-strong",
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

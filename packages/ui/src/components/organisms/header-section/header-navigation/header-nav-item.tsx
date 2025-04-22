"use client";
import { usePathname } from "next/navigation";
import { resolveLink } from "../../../../lib/resolve-link/resolve-link";
import { NavLink } from "../../../atoms";
import { cn } from "../../../../lib/utils";

interface NavItemProps {
  id: string;
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
}

export const NavItem = ({ id, href, label, onClick, className }: NavItemProps) => {
  const link = resolveLink(href);
  const pathname = usePathname();
  let isActive = pathname === link;
  if (link !== "/") {
    isActive = pathname?.startsWith(link);
  }

  return (
    <li
      key={id}
      className={cn("transition-colors w-full", className)}
    >
      <NavLink
        onClick={onClick}
        isActive={isActive}
        href={link}
        className="w-full"
      >
        {label}
      </NavLink>
    </li>
  );
};

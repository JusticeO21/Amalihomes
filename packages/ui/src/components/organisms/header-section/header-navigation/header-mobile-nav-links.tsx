"use client";

import { Button, NavLinkProps } from "@amalihomes/ui";
import { NavItem } from "./header-nav-item";
import { usePreventBodyScroll } from "../../../../hooks/use-prevent-scroll/use-prevent-scroll";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLinkProps[];
  onLinkClick?: () => void;
}

export const HeaderMobileMenu = ({ isOpen, navLinks, onLinkClick }: MobileMenuProps) => {
  usePreventBodyScroll(isOpen);
  if (!isOpen) return null;

  return (
    <div className="absolute top-full h-screen left-0  z-50 px-16 md:px-32 lg:hidden w-full flex flex-col bg-white py-24 md:py-32 shadow-sm gap-24">
      <ul className="flex flex-col items-start gap-8 pt-12 justify-start w-full">
        {navLinks.map(({ id, href, label }) => (
          <NavItem
            key={id}
            id={id}
            href={href}
            label={label}
            onClick={onLinkClick}
            className=""
          />
        ))}
      </ul>
      <Button className="w-full h-48 lg:flex items-center justify-center">Login</Button>
    </div>
  );
};

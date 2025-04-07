import { Button } from "@amalihomes/ui/components/button";
import { NavItem } from "./header-nav-item";
import { NavLinkProps } from "./nav-links-listing";

interface MobileMenuProps {
  isOpen: boolean;
  navLinks: NavLinkProps[];
  onLinkClick: () => void;
}

export const MobileMenu = ({ isOpen, navLinks, onLinkClick }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0  z-50 px-16 md:px-32 lg:hidden w-full flex flex-col bg-white py-24 md:py-32 shadow-sm gap-24">
      <ul className="flex flex-col items-start gap-8 pt-12 justify-start">
        {navLinks.map(({ sys: { id }, fields: { href, label } }) => (
          <NavItem
            key={id}
            id={id}
            href={href}
            label={label}
            onClick={onLinkClick}
          />
        ))}
      </ul>
      <Button className="w-full h-48 lg:flex items-center justify-center">Login</Button>
    </div>
  );
};

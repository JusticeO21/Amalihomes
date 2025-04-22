import { NavLinkProps } from "../../footer-section";
import { NavItem } from "./header-nav-item";

interface DesktopNavLinksProps {
  navLinks: NavLinkProps[];
}

export const HeaderDesktopNavLinks = ({ navLinks }: DesktopNavLinksProps) => (
  <ul className="hidden gap-6 lg:flex h-48">
    {navLinks.map(({ href, label, id }) => (
      <NavItem
        key={id}
        id={id}
        href={href}
        label={label}
      />
    ))}
  </ul>
);

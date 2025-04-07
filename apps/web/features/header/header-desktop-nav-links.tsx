import { NavItem } from "./header-nav-item";
import { NavLinkProps } from "./nav-links-listing";

interface DesktopNavLinksProps {
  navLinks: NavLinkProps[];
}

export const DesktopNavLinks = ({ navLinks }: DesktopNavLinksProps) => (
  <ul className="hidden gap-6 lg:flex h-48">
    {navLinks.map(({ sys: { id }, fields: { href, label } }) => (
      <NavItem
        key={id}
        id={id}
        href={href}
        label={label}
        onClick={() => {}}
      />
    ))}
  </ul>
);

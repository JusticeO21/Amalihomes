import { NavLink } from "components/nav-link";
import { resolveLink } from "lib/utils/resolve-link/resolve-link";

interface NavItemProps {
  id: string;
  href: string;
  label: string;
  onClick: () => void;
}

export const NavItem = ({ id, href, label, onClick }: NavItemProps) => {
  const link = resolveLink(href);

  return (
    <li
      key={id}
      className="transition-colors w-full"
      onClick={onClick}
    >
      <NavLink
        href={link}
        className="w-full lf:w-min"
      >
        {label}
      </NavLink>
    </li>
  );
};

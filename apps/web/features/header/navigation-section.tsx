import { Logo } from "components/logo";
import { getEntry } from "lib/contentful/contentful";
import { TypeNavigationSkeleton } from "lib/contentful/types";
import { NavLinkProps, NavLinksListing } from "./nav-links-listing";

export const NavigationSection = async () => {
  const response = await getEntry<TypeNavigationSkeleton>("navigation");
  const typedNavLinks = response.fields.navigationLinks as unknown as NavLinkProps[];

  return (
    <nav className="relative flex items-center justify-between py-16 px-32 lg:px-64 border-b border-Grey-fill">
      <div>
        <Logo />
      </div>
      <NavLinksListing navLinks={typedNavLinks} />
    </nav>
  );
};

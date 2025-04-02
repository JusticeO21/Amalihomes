import { Logo } from "components/logo";
import { getEntry } from "lib/contentful/contentful";
import { TypeNavigationSkeleton } from "lib/contentful/types";
import { NavLinkProps, NavLinksListing } from "./nav-links-listing";
import { Container } from "@amalihomes/ui/components/container";

export const NavigationSection = async () => {
  const response = await getEntry<TypeNavigationSkeleton>("navigation");
  const typedNavLinks = response.fields.navigationLinks as unknown as NavLinkProps[];

  return (
    <nav className="border-b border-Grey-fill">
      <Container
        paddingY={0}
        className="relative flex items-center justify-between py-16 "
      >
        <span>
          <Logo />
        </span>
        <NavLinksListing navLinks={typedNavLinks} />
      </Container>
    </nav>
  );
};

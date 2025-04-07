import { Container } from "@amalihomes/ui/components/container";
import { Logo } from "components/logo";
import { getEntry } from "lib/contentful/contentful";
import { TypeNavigationSkeleton } from "lib/contentful/types";
import { NavLinkProps, NavLinksListing } from "./nav-links-listing";

export const NavigationSection = async () => {
  const response = await getEntry<TypeNavigationSkeleton>("navigation");
  const typedNavLinks = response.fields.navigationLinks as unknown as NavLinkProps[];

  return (
    <nav className=" bg-white has-[div#search-bar]:fixed has-[div#search-bar]:inset-0 has-[div#search-bar]:z-1000 has-[div#search-bar]:h-screen">
      <div className="border-b border-Grey-fill">
        <Container
          paddingX={0}
          paddingY={0}
          className="relative flex items-center justify-between py-16 px-16 md:px-32 lg:px-64  h-56 lg:h-80 my-0"
        >
          <Logo />
          <NavLinksListing navLinks={typedNavLinks} />
        </Container>
      </div>
    </nav>
  );
};

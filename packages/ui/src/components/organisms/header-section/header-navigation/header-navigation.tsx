"use client";

import { Logo, NavLinkProps } from "@amalihomes/ui";
import { SubmitHandler } from "react-hook-form";
import { HeaderNavLinksListing } from "./header-nav-links-listing";
import { HeaderNavigationSectionWrapper } from "./header-nav-section-wrapper";
import { SearchFormValues } from "./header-search-pannel";

interface NavigationSectionProps {
  navLinks: NavLinkProps[];
  logoUrl: string;
  isAuth: boolean;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
  onSubmitSearchResults: SubmitHandler<SearchFormValues>;
}

export const HeaderNavigationSection = ({
  navLinks,
  logoUrl,
  isAuth,
  isMenuOpen = false,
  toggleMenu,
  onSubmitSearchResults,
}: NavigationSectionProps) => {
  return (
    <HeaderNavigationSectionWrapper>
      <Logo
        url={logoUrl}
        alt="Amali Homes"
      />
      <HeaderNavLinksListing
        isMenuOpen={isMenuOpen}
        toggleMenu={toggleMenu}
        navLinks={navLinks}
        isAuth={isAuth}
        onSubmitSearchResults={onSubmitSearchResults}
      />
    </HeaderNavigationSectionWrapper>
  );
};

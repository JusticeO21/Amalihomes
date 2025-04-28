"use client";
import {
  Country,
  HeaderLanguageBar,
  HeaderNavigationSection,
  HeaderWrapper,
  Language,
  NavLinkProps,
  SearchFormValues,
} from "@amalihomes/ui";
import { useState } from "react";
import ConsentBanner from "../analytics/consent-banner";
export interface AppHeaderNavigation {
  logo: string;
  links: NavLinkProps[];
  countries: Country[];
  languages: Language[];
}

export const AppHearNavigation = ({ links, logo, countries, languages }: AppHeaderNavigation) => {
  const onSubmitSearchResults = (data: SearchFormValues) => {};
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [isDrawerOpen, setOpenDrawer] = useState(false);

  const handleOpenMenu = () => {
    setOpenDrawer(false);
    setOpenMenu((state) => !state);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer((state) => !state);
    setOpenMenu(false);
  };

  const isAuth = false;
  return (
    <HeaderWrapper className="flex flex-col gap-0 sticky top-0 z-50">
      <ConsentBanner />
      <HeaderLanguageBar
        countries={countries}
        languages={languages}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={handleOpenDrawer}
      />
      <HeaderNavigationSection
        isAuth={isAuth}
        logoUrl={logo}
        navLinks={links}
        isMenuOpen={isMenuOpen}
        toggleMenu={handleOpenMenu}
        onSubmitSearchResults={onSubmitSearchResults}
      />
    </HeaderWrapper>
  );
};

"use client";

import { NavLinkProps } from "../footer-section";
import { Country, HeaderLanguageBar, Language } from "./header-language-bar";
import { HeaderNavigationSection, SearchFormValues } from "./header-navigation";
import { HeaderWrapper } from "./header-navigation/header-wrapper";

export interface HeaderProps {
  isAuth: boolean;
  logoUrl: string;
  navLinks: NavLinkProps[];
  onSubmitSearchResults: (data: SearchFormValues) => void;
  languages: Language[];
  countries: Country[];
}

export const Header = ({ isAuth, logoUrl, navLinks, onSubmitSearchResults, languages, countries }: HeaderProps) => {
  return (
    <HeaderWrapper className="flex flex-col gap-0 sticky top-0 z-50">
      <HeaderLanguageBar
        countries={countries}
        languages={languages}
      />
      <HeaderNavigationSection
        isAuth={isAuth}
        logoUrl={logoUrl}
        navLinks={navLinks}
        onSubmitSearchResults={onSubmitSearchResults}
      />
    </HeaderWrapper>
  );
};

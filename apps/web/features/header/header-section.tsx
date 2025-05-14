"use client";
import { useCountryStore } from "@/stores/use-country-store";
import {
  Country,
  GdprBannerProps,
  HeaderLanguageBar,
  HeaderNavigationSection,
  HeaderWrapper,
  Language,
  NavLinkProps,
  SearchFormValues,
} from "@amalihomes/ui";
import { useEffect, useState } from "react";
import ConsentBanner from "../analytics/consent-banner";
export interface AppHeaderNavigation {
  logo: string;
  links: NavLinkProps[];
  countries: Country[];
  languages: Language[];
  banner: Readonly<Omit<GdprBannerProps, "getBanner">>;
}

export const AppHeaderSection = ({ links, logo, countries, languages, banner }: AppHeaderNavigation) => {
  const onSubmitSearchResults = (data: SearchFormValues) => {};
  const [isMenuOpen, setOpenMenu] = useState(false);
  const [isDrawerOpen, setOpenDrawer] = useState(false);
  const { country, setCountry, setCountries } = useCountryStore();

  const handleOpenMenu = () => {
    setOpenDrawer(false);
    setOpenMenu((state) => !state);
  };
  const handleOpenDrawer = () => {
    setOpenDrawer((state) => !state);
    setOpenMenu(false);
  };

  useEffect(() => {
    if (window !== undefined) {
      const initCountryValue = JSON.parse(localStorage.getItem("country-storage") ?? "{}");
      setCountry(
        initCountryValue?.state?.country ?? `${countries[0]?.country} (${countries[0]?.language.languageCode})`,
      );
      setCountries(countries);
    }
  }, []);

  const isAuth = false;
  return (
    <HeaderWrapper className="flex flex-col gap-0 sticky top-0 z-50">
      <ConsentBanner {...banner} />
      <HeaderLanguageBar
        countries={countries}
        languages={languages}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={handleOpenDrawer}
        selectedCountry={country}
        setSelectedCountry={(country) => setCountry(country)}
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

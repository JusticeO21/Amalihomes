"use client";

import { useLocalStorageStore } from "../../../../hooks/use-local-storage-store/use-local-storage-store";
import { Country, HeaderLanguageDrawer, Language } from "./language-bar-drawer";
import { HeaderLanguageSelectorButton } from "./language-bar-language-selector-button";
import { HeaderLanguageSectionWrapper } from "./language-section";

export interface LanguageBarProps {
  countries: Country[];
  languages: Language[];
  isDrawerOpen?: boolean;
  toggleDrawer?: () => void;
}

export const HeaderLanguageBar = ({ countries, languages, isDrawerOpen = false, toggleDrawer }: LanguageBarProps) => {
  const [country, setCountry] = useLocalStorageStore<string>(
    "country",
    `${countries[0]?.country} (${countries[0]?.language.languageCode})`,
  );
  const [language, setLanguage] = useLocalStorageStore<string>("language", countries[0]?.language.language ?? "");

  const handleSetCountry = (country: string) => {
    const tempCountry = countries?.find(
      (tempCountry) => tempCountry.country.trim().toLowerCase() === country.split("(")[0]?.trim().toLowerCase(),
    );

    setCountry(country);
    if (tempCountry) {
      setLanguage(tempCountry.language.language ?? "");
    }
  };

  const handleSetLanguage = (language: string) => {
    setLanguage(language);
  };

  const handleOpenDrawer = () => {
    if (toggleDrawer) toggleDrawer();
  };

  return (
    <HeaderLanguageSectionWrapper>
      <HeaderLanguageSelectorButton
        country={country.split("(")[0] ?? ""}
        language={language}
        onClick={handleOpenDrawer}
      />

      <HeaderLanguageDrawer
        isOpen={isDrawerOpen}
        onClose={handleOpenDrawer}
        countries={countries}
        selectedCountry={country}
        selectedLanguage={language}
        languages={languages}
        onCountryChange={handleSetCountry}
        onLanguageChange={handleSetLanguage}
      />
    </HeaderLanguageSectionWrapper>
  );
};

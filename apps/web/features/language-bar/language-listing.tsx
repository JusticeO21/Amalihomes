"use client";

import { useState } from "react";
import { Country, LanguageDrawer } from "./language-bar-drawer";
import { LanguageSelectorButton } from "./language-bar-language-selector-button";

export interface LanguageListingProps {
  countries: Country[];
}

export const LanguageListing = ({ countries }: LanguageListingProps) => {
  const [language, setLanguage] = useState<string>(countries[0]?.languages[0] ?? "");
  const [country, setCountry] = useState<string>(
    `${countries[0]?.country ?? ""} (${countries[0]?.languageCode ?? ""})`,
  );
  const [languages, setLanguages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleSetCountry = (country: string) => {
    const val = countries?.find(
      (tempCountry) => tempCountry.country.toLowerCase() === (country?.split(" ")[0]?.toLowerCase() ?? ""),
    );

    if (val) {
      setCountry(val.country);
      setLanguages(val.languages);
      handleSetLanguage(val.languages[0] ?? "");
    }
  };

  const handleSetLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <>
      <LanguageSelectorButton
        country={country}
        language={language}
        onClick={() => setOpen((state) => !state)}
      />

      <LanguageDrawer
        isOpen={open}
        onClose={() => setOpen(false)}
        countries={countries}
        selectedCountry={country}
        selectedLanguage={language}
        languages={languages}
        onCountryChange={handleSetCountry}
        onLanguageChange={handleSetLanguage}
      />
    </>
  );
};

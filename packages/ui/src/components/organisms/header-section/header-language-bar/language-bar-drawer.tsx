"use client";

import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  IconAlert,
  Typography,
} from "@amalihomes/ui";
import { CountrySelector } from "./language-bar-country-selector";
import { LanguageSelector } from "./language-bar-language-selector";

export interface Language {
  language: string;
  languageCode: string;
}

export interface SalesRepresentative {
  profile: {
    imageUrl: string;
    imageAlt: string;
  };
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
}

export interface Country {
  country: string;
  otherName?: string;
  language: Language;
  salesRepresentative: SalesRepresentative;
}

interface LanguageDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  countries: Country[];
  selectedCountry: string;
  selectedLanguage: string;
  languages: Language[];
  onCountryChange: (country: string) => void;
  onLanguageChange: (language: string) => void;
}

export const HeaderLanguageDrawer = ({
  isOpen,
  onClose,
  countries,
  selectedCountry,
  selectedLanguage,
  languages,
  onCountryChange,
  onLanguageChange,
}: LanguageDrawerProps) => {
  return (
    <Drawer
      isOpen={isOpen}
      onClose={onClose}
      shadowClassName="top-112 lg:top-56"
      className="top-112 lg:top-56"
    >
      <DrawerContent
        side="right"
        className="top-0 border-0  bg-white w-full sm:w-549 py-40 px-16 sm:px-40 flex flex-col gap-44 overflow-y-auto"
      >
        <DrawerHeader>
          <DrawerTitle>
            <Typography
              size="base"
              weight="bold"
              colors="text-grey-text-weak"
              className="text-left  text-24"
            >
              Select your language and Country
            </Typography>
          </DrawerTitle>
        </DrawerHeader>
        <div className="p-4 flex flex-col gap-16">
          <CountrySelector
            countries={countries}
            selectedCountry={selectedCountry}
            onChange={onCountryChange}
          />
          <LanguageSelector
            languages={languages.map((lang) => lang.language)}
            selectedLanguage={selectedLanguage}
            onChange={onLanguageChange}
          />
        </div>
        <div className="w-full flex flex-col gap-y-16 border border-Gray-border-light rounded-md p-16 bg-info-fill">
          <div className="flex items-center gap-8 h-32">
            <IconAlert />
            <p className="text-18 text-info-text font-bold">Countries we operate.</p>
          </div>
          <Typography
            size="sm"
            variant="p"
            className="text-Gray-text"
          >
            The countries we operate in with their default language are;{" "}
            {countries
              .map((country) => `${country.otherName ?? country.country} (${country.language.languageCode})`)
              .join(", ")}
          </Typography>
        </div>
        <DrawerFooter>
          <Button
            variant="primary"
            onClick={onClose}
            className="w-full flex items-center justify-center font-bold py-12 px-24"
          >
            Close
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

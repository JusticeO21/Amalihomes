import { Country, Language, NavLinkProps } from "@amalihomes/ui";

export const mockNavLinks: NavLinkProps[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "properties", label: "Properties", href: "/properties" },
  { id: "about", label: "About Us", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
  { id: "blog", label: "Blog", href: "/blog" },
];

export const mockLanguages: Language[] = [
  { language: "English", languageCode: "en" },
  { language: "Español", languageCode: "es" },
  { language: "Français", languageCode: "fr" },
  { language: "Deutsch", languageCode: "de" },
];

export const mockCountries: Country[] = [
  { country: "United States", language: { language: "English", languageCode: "en" } },
  { country: "España", otherName: "Spain", language: { language: "Español", languageCode: "es" } },
  { country: "France", language: { language: "Français", languageCode: "fr" } },
  { country: "Deutschland", otherName: "Germany", language: { language: "Deutsch", languageCode: "de" } },
];

export const handleSearchSubmit = () => {};

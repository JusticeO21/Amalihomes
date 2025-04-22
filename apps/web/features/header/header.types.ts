export interface HeaderProps {
  title: string;
  logo: Logo;
  links: Link[];
  countries: Country[];
  languages: LanguageElement[];
}

export interface Country {
  metadata: Metadata;
  sys: LanguageSys;
  fields: CountryFields;
}

export interface CountryFields {
  country: string;
  otherName?: string;
  defaultLanguage: LanguageElement;
}

export interface LanguageElement {
  metadata: Metadata;
  sys: LanguageSys;
  fields: LanguageFields;
}

export interface LanguageFields {
  language: LanguageEnum;
  languageCode: Locale;
}

export enum LanguageEnum {
  Deutch = "Deutch",
  English = "English",
}

export enum Locale {
  De = "de",
  EnUS = "en-US",
}

export interface Metadata {
  tags: unknown[];
  concepts: unknown[];
}

export interface LanguageSys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  publishedVersion: number;
  revision: number;
  contentType?: ContentType;
  locale: Locale;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: PurpleType;
  linkType: LinkType;
  id: ID;
}

export enum ID {
  Bku0Cpbbdu3K = "bku0cpbbdu3k",
  Country = "country",
  Language = "language",
  Link = "link",
  Master = "master",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface Link {
  metadata: Metadata;
  sys: LanguageSys;
  fields: LinkFields;
}

export interface LinkFields {
  label: string;
  link: string;
}

export interface Logo {
  metadata: Metadata;
  sys: LanguageSys;
  fields: LogoFields;
}

export interface LogoFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: string;
}

export interface Details {
  size: number;
  image: Image;
}

export interface Image {
  width: number;
  height: number;
}

export interface FooterProps {
  title: string;
  description: string;
  inputPlaceholder: string;
  privacyDescription: string;
  privacyLink: PrivacyLinkElement;
  ctaLabel: string;
  links: PurpleLink[];
  contactUs: string[];
  socials: Social[];
  copyright: string;
  legalLinks: PrivacyLinkElement[];
}

export interface PrivacyLinkElement {
  metadata: Metadata;
  sys: PrivacyLinkSys;
  fields: PrivacyLinkFields;
}

export interface PrivacyLinkFields {
  label: string;
  link: string;
}

export interface Metadata {
  tags: unknown[];
  concepts: unknown[];
}

export interface PrivacyLinkSys {
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
  FooterLinks = "footerLinks",
  Link = "link",
  Master = "master",
  SocialMedia = "socialMedia",
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum PurpleType {
  Link = "Link",
}

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface PurpleLink {
  metadata: Metadata;
  sys: PrivacyLinkSys;
  fields: PurpleFields;
}

export interface PurpleFields {
  title: string;
  links: PrivacyLinkElement[];
}

export interface Social {
  metadata: Metadata;
  sys: PrivacyLinkSys;
  fields: SocialFields;
}

export interface SocialFields {
  title: string;
  url: string;
  icon: Icon;
}

export interface Icon {
  metadata: Metadata;
  sys: PrivacyLinkSys;
  fields: IconFields;
}

export interface IconFields {
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

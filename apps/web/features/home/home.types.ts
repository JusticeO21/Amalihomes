// To parse this data:
//
//   import { Convert, HomeProps } from "./file";
//
//   const homeProps = Convert.toHomeProps(json);

export interface HomeProps {
  title: string;
  description: string;
  ctas: Cta[];
  heroImages: Image[];
  uspTitle: string;
  uspDescription: string;
  uspCards: UspCard[];
  uspImage: Image;
  productTitle: string;
  productCards: Card[];
  flashSale: FlashSale;
  newArrivalsTitle: string;
  newArrivalsCards: Card[];
}

export interface Cta {
  metadata: Metadata;
  sys: CtaSys;
  fields: CtaFields;
}

export interface CtaFields {
  label: string;
  link: string;
}

export interface Metadata {
  tags: unknown[];
  concepts: unknown[];
}

export interface CtaSys {
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
  Card = "card",
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

export enum Locale {
  EnUS = "en-US",
}

export enum FluffyType {
  Asset = "Asset",
  Entry = "Entry",
}

export interface FlashSale {
  metadata: Metadata;
  sys: CtaSys;
  fields: FlashSaleFields;
}

export interface FlashSaleFields {
  title: string;
  description: string;
  cardImage: Image;
  cta: Cta;
  promoCode: string;
}

export interface Image {
  metadata: Metadata;
  sys: CtaSys;
  fields: UspImageFields;
}

export interface UspImageFields {
  title: string;
  description: string;
  file: File;
}

export interface File {
  url: string;
  details: Details;
  fileName: string;
  contentType: ContentTypeEnum;
}

export enum ContentTypeEnum {
  ImagePNG = "image/png",
}

export interface Details {
  size: number;
  image: ImageClass;
}

export interface ImageClass {
  width: number;
  height: number;
}

export interface Card {
  metadata: Metadata;
  sys: CtaSys;
  fields: NewArrivalsCardFields;
}

export interface NewArrivalsCardFields {
  title: string;
  cardImage: Image;
}

export interface UspCard {
  metadata: Metadata;
  sys: CtaSys;
  fields: UspCardFields;
}

export interface UspCardFields {
  title: string;
  description: string;
  cardImage: Image;
}

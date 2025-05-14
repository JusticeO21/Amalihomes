export interface ContactProps {
  image: ProfileClass;
  title: string;
  description: string;
  salesRepresentative: SalesRepresentative;
  formTitle: string;
  inputNameLabel: string;
  inputNamePlaceholder: string;
  inputEmailLabel: string;
  inputEmailPlaceholder: string;
  inputMessageLabel: string;
  inputMessagePlaceholder: string;
  ctaLabel: string;
}

export interface PageRep {
  metadata: Metadata;
  sys: ImageSys;
  fields: PageRepFields;
}

export interface PageRepFields {
  label: string;
  link: string;
  pageRep?: SalesRepresentative;
}

export interface CountryRep {
  metadata: Metadata;
  sys: ImageSys;
  fields: CountryRepFields;
}

export interface CountryRepFields {
  country: string;
  defaultLanguage: unknown;
  salesRepresentative: SalesRepresentative;
  otherName?: string;
}

export interface ProfileClass {
  metadata: Metadata;
  sys: ImageSys;
  fields: ImageFields;
}

export interface ImageFields {
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
  image: DetailsImage;
}

export interface DetailsImage {
  width: number;
  height: number;
}

export interface Metadata {
  tags: any[];
  concepts: any[];
}

export interface ImageSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  publishedVersion: number;
  revision: number;
  locale: string;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: string;
  type: Type;
  linkType: LinkType;
}

export enum LinkType {
  ContentType = "ContentType",
  Environment = "Environment",
  Space = "Space",
}

export enum Type {
  Link = "Link",
}

export interface SalesRepresentative {
  metadata: Metadata;
  sys: ImageSys;
  fields: SalesRepresentativeFields;
}

export interface SalesRepresentativeFields {
  profile: ProfileClass;
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
}

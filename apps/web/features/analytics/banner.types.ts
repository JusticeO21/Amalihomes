export interface BannerProps {
  image: BannerPropsImage;
  title: string;
  description: string;
  customizeButtonText: string;
  rejectButtonText: string;
  consentButtonText: string;
  cookieOptions: CookieOptions;
}

export interface CookieOptions {
  metadata: Metadata;
  sys: CookieOptionsSys;
  fields: CookieOptionsFields;
}

export interface CookieOptionsFields {
  testStrict: string;
  performance: string;
  targeting: string;
  functionality: string;
  unclassified: string;
}

export interface Metadata {
  tags: unknown[];
  concepts: unknown[];
}

export interface CookieOptionsSys {
  space: ContentType;
  id: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  publishedVersion: number;
  revision: number;
  contentType?: ContentType;
  locale: string;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  type: string;
  linkType: string;
  id: string;
}

export interface BannerPropsImage {
  metadata: Metadata;
  sys: CookieOptionsSys;
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

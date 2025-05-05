import { Document } from "@contentful/rich-text-types";

export interface FaqsLoaderProps {
  mainImage: MainImage;
  title: string;
  description: string;
  questionCategories: QuestionCategory[];
  salesRep: SalesRep;
}

export interface FaqsProps {
  mainImage: {
    imageUrl: string;
    imageAlt: string;
  };
  title: string;
  description: string;
  questionCategories: QuestionProps[];
  salesRep: SalesRep;
}

export interface MainImage {
  metadata: Metadata;
  sys: Sys;
  fields: MainImageFields;
}

export interface MainImageFields {
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

export interface Metadata {
  tags: unknown[];
  concepts: unknown[];
}

export interface Sys {
  space: ContentType;
  id: string;
  type: FluffyType;
  createdAt: Date;
  updatedAt: Date;
  environment: ContentType;
  publishedVersion: number;
  revision: number;
  locale: Locale;
  contentType?: ContentType;
}

export interface ContentType {
  sys: ContentTypeSys;
}

export interface ContentTypeSys {
  id: ID;
  type: PurpleType;
  linkType: LinkType;
}

export enum ID {
  Faqs = "faqs",
  QuestionAnswer = "questionAnswer",
  QuestionCategory = "questionCategory",
  SalesRepresentative = "salesRepresentative",
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

export interface QuestionCategory {
  metadata: Metadata;
  sys: Sys;
  fields: QuestionCategoryFields;
}

export interface QuestionProps {
  id: string;
  title: string;
  questions: (QuestionsAnswerFields & { id: string })[];
}

export interface QuestionCategoryFields {
  title: string;
  questionsAnswers: QuestionsAnswer[];
}

export interface QuestionsAnswer {
  metadata: Metadata;
  sys: Sys;
  fields: QuestionsAnswerFields;
}

export interface QuestionsAnswerFields {
  question: string;
  answer: Document;
}

export interface Answer {
  nodeType: string;
  data: unknown;
  content: AnswerContent[];
}

export interface AnswerContent {
  nodeType: string;
  data: unknown;
  content: unknown[];
}

export interface SalesRep {
  metadata: Metadata;
  sys: Sys;
  fields: SalesRepFields;
}

export interface SalesRepFields {
  profile: MainImage;
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
}

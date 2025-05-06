export interface LiveChatProps {
  profile: ChatIcon;
  introduction: string;
  description: string;
  productIcon: ChatIcon;
  productTitle: string;
  productFormTitle: string;
  productFormDescription: string;
  productInputEmailLabel: string;
  productInputEmailPlaceholder: string;
  productInputSubjectLabel: string;
  productInputSubjectPlaceholder: string;
  productInputMessageLabel: string;
  productInputMessagePlaceholder: string;
  productButtonLabel: string;
  orderTitle: string;
  orderIcon: ChatIcon;
  orderFormTitle: string;
  orderFormDescription: string;
  orderInputOrderIdLabel: string;
  orderInputOrderIdPlaceholder: string;
  orderInputEmailLabel: string;
  orderInputEmailPlaceholder: string;
  orderInputSubjectLabel: string;
  orderInputSubjectPlaceholder: string;
  orderMessageLabel: string;
  orderInputMessagePlaceholder: string;
  orderButtonLabel: string;
  generalTitle: string;
  generalIcon: ChatIcon;
  homeIcon: ChatIcon;
  chatIcon: ChatIcon;
  faqIcon: ChatIcon;
  generalFormTitle: string;
  generalFormDescription: string;
  generalEnquiryTypeLabel: string;
  generalEnquiryTypes: string[];
  generalEnquiryTypePlaceholder: string;
  generalInputSubjectLabel: string;
  generalInputSubjectPlaceholder: string;
  generalInputEmailLabel: string;
  generalEnquiresInputEmailPlaceholder: string;
  generalInputMessageLabel: string;
  generalInputMessagePlaceholder: string;
  faqTitle: string;
  faqDescription: string;
  faqs: Faqs;
}

export interface ChatIcon {
  metadata: Metadata;
  sys: ChatIconSys;
  fields: ChatIconFields;
}

export interface ChatIconFields {
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

export interface ChatIconSys {
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
  Bku0Cpbbdu3K = "bku0cpbbdu3k",
  Faqs = "faqs",
  Master = "master",
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

export interface Faqs {
  metadata: Metadata;
  sys: ChatIconSys;
  fields: FaqsFields;
}

export interface FaqsFields {
  mainImage: ChatIcon;
  title: string;
  description: string;
  questionCategories: QuestionCategory[];
  salesRep: SalesRep;
}

export interface QuestionCategory {
  metadata: Metadata;
  sys: ChatIconSys;
  fields: QuestionCategoryFields;
}

export interface QuestionCategoryFields {
  title: string;
  questionsAnswers: QuestionsAnswer[];
}

export interface QuestionsAnswer {
  metadata: Metadata;
  sys: ChatIconSys;
  fields: QuestionsAnswerFields;
}

export interface QuestionsAnswerFields {
  question: string;
  answer: Answer;
}

export interface Answer {
  nodeType: string;
  data: Data;
  content: AnswerContent[];
}

export interface PurpleContent {
  nodeType: PurpleNodeType;
  data: Data;
  content?: AnswerContent[];
  value?: string;
  marks?: unknown[];
}

export interface AnswerContent {
  nodeType: FluffyNodeType;
  data: Data;
  content: PurpleContent[];
}

export interface Data {}

export enum PurpleNodeType {
  ListItem = "list-item",
  Text = "text",
}

export enum FluffyNodeType {
  OrderedList = "ordered-list",
  Paragraph = "paragraph",
}

export interface SalesRep {
  metadata: Metadata;
  sys: ChatIconSys;
  fields: SalesRepFields;
}

export interface SalesRepFields {
  profile: ChatIcon;
  name: string;
  role: string;
  phoneNumber: string;
  email: string;
}

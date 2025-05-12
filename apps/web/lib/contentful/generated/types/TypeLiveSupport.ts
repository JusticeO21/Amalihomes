import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFaqsSkeleton } from "./TypeFaqs";

export interface TypeLiveSupportFields {
  profile: EntryFieldTypes.AssetLink;
  introduction: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  productIcon: EntryFieldTypes.AssetLink;
  productTitle: EntryFieldTypes.Symbol;
  productFormTitle: EntryFieldTypes.Symbol;
  productFormDescription: EntryFieldTypes.Symbol;
  productInputProductLabel: EntryFieldTypes.Symbol;
  productInputProductPlaceholder: EntryFieldTypes.Symbol;
  productInputEmailLabel: EntryFieldTypes.Symbol;
  productInputEmailPlaceholder: EntryFieldTypes.Symbol;
  productInputSubjectLabel: EntryFieldTypes.Symbol;
  productInputSubjectPlaceholder: EntryFieldTypes.Symbol;
  productInputMessageLabel: EntryFieldTypes.Symbol;
  productInputMessagePlaceholder: EntryFieldTypes.Symbol;
  productButtonLabel: EntryFieldTypes.Symbol;
  orderTitle: EntryFieldTypes.Symbol;
  orderIcon: EntryFieldTypes.AssetLink;
  orderFormTitle: EntryFieldTypes.Symbol;
  orderFormDescription: EntryFieldTypes.Text;
  orderInputOrderIdLabel: EntryFieldTypes.Symbol;
  orderInputOrderIdPlaceholder?: EntryFieldTypes.Symbol;
  orderInputEmailLabel: EntryFieldTypes.Symbol;
  orderInputEmailPlaceholder: EntryFieldTypes.Symbol;
  orderInputSubjectLabel: EntryFieldTypes.Symbol;
  orderInputSubjectPlaceholder: EntryFieldTypes.Symbol;
  orderMessageLabel: EntryFieldTypes.Symbol;
  orderInputMessagePlaceholder: EntryFieldTypes.Symbol;
  orderButtonLabel: EntryFieldTypes.Symbol;
  generalTitle: EntryFieldTypes.Symbol;
  generalIcon: EntryFieldTypes.AssetLink;
  homeIcon?: EntryFieldTypes.AssetLink;
  chatIcon: EntryFieldTypes.AssetLink;
  faqIcon: EntryFieldTypes.AssetLink;
  generalFormTitle?: EntryFieldTypes.Symbol;
  generalFormDescription: EntryFieldTypes.Symbol;
  generalEnquiryTypeLabel: EntryFieldTypes.Symbol;
  generalEnquiryTypes: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  generalEnquiryTypePlaceholder: EntryFieldTypes.Symbol;
  generalInputSubjectLabel: EntryFieldTypes.Symbol;
  generalInputSubjectPlaceholder: EntryFieldTypes.Symbol;
  generalInputEmailLabel: EntryFieldTypes.Symbol;
  generalEnquiresInputEmailPlaceholder: EntryFieldTypes.Symbol;
  generalInputMessageLabel: EntryFieldTypes.Symbol;
  generalInputMessagePlaceholder: EntryFieldTypes.Symbol;
  faqTitle: EntryFieldTypes.Symbol;
  faqDescription: EntryFieldTypes.Symbol;
  faqs: EntryFieldTypes.EntryLink<TypeFaqsSkeleton>;
}

export type TypeLiveSupportSkeleton = EntrySkeletonType<TypeLiveSupportFields, "liveSupport">;
export type TypeLiveSupport<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeLiveSupportSkeleton,
  Modifiers,
  Locales
>;

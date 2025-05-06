import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLiveSupportFields {
  profile: EntryFieldTypes.AssetLink;
  introduction: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  productIcon: EntryFieldTypes.AssetLink;
  productTitle: EntryFieldTypes.Symbol;
  productFormTitle: EntryFieldTypes.Symbol;
  productFormDescription: EntryFieldTypes.Symbol;
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
  generalTitle: EntryFieldTypes.Symbol;
  generalIcon: EntryFieldTypes.AssetLink;
  homeIcon?: EntryFieldTypes.AssetLink;
  chatIcon: EntryFieldTypes.AssetLink;
  faqIcon: EntryFieldTypes.AssetLink;
}

export type TypeLiveSupportSkeleton = EntrySkeletonType<TypeLiveSupportFields, "liveSupport">;
export type TypeLiveSupport<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeLiveSupportSkeleton,
  Modifiers,
  Locales
>;

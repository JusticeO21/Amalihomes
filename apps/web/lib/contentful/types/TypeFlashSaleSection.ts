import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeFlashSaleSectionFields {
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  promoCode?: EntryFieldTypes.Symbol;
  ctaLabel?: EntryFieldTypes.Symbol;
  ctaUrl?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeFlashSaleSectionSkeleton = EntrySkeletonType<TypeFlashSaleSectionFields, "flashSaleSection">;
export type TypeFlashSaleSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeFlashSaleSectionSkeleton,
  Modifiers,
  Locales
>;

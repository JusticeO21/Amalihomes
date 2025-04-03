import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCategoryCardItemFields {
  title?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeCategoryCardItemSkeleton = EntrySkeletonType<TypeCategoryCardItemFields, "categoryCardItem">;
export type TypeCategoryCardItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCategoryCardItemSkeleton,
  Modifiers,
  Locales
>;

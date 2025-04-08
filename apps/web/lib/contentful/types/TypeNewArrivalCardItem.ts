import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewArrivalCardItemFields {
  title?: EntryFieldTypes.Symbol;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeNewArrivalCardItemSkeleton = EntrySkeletonType<TypeNewArrivalCardItemFields, "newArrivalCardItem">;
export type TypeNewArrivalCardItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeNewArrivalCardItemSkeleton,
  Modifiers,
  Locales
>;

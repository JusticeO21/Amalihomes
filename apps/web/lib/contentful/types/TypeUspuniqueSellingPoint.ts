import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeUspuniqueSellingPointFields {
  heading?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  cards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
  image?: EntryFieldTypes.AssetLink;
}

export type TypeUspuniqueSellingPointSkeleton = EntrySkeletonType<
  TypeUspuniqueSellingPointFields,
  "uspuniqueSellingPoint"
>;
export type TypeUspuniqueSellingPoint<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeUspuniqueSellingPointSkeleton, Modifiers, Locales>;

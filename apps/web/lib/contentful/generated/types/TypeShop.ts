import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";

export interface TypeShopFields {
  categoryTitle: EntryFieldTypes.Symbol;
  categories: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}

export type TypeShopSkeleton = EntrySkeletonType<TypeShopFields, "shop">;
export type TypeShop<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeShopSkeleton,
  Modifiers,
  Locales
>;

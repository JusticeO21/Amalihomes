import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeCardFields {
  title: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
  cardImage: EntryFieldTypes.AssetLink;
  cta?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
  promoCode?: EntryFieldTypes.Symbol;
}

export type TypeCardSkeleton = EntrySkeletonType<TypeCardFields, "card">;
export type TypeCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCardSkeleton,
  Modifiers,
  Locales
>;

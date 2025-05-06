import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHomeFields {
  title?: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  ctas: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
  heroImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
  uspTitle: EntryFieldTypes.Symbol;
  uspDescription?: EntryFieldTypes.Text;
  uspCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
  uspImage: EntryFieldTypes.AssetLink;
  productTitle: EntryFieldTypes.Symbol;
  productCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
  flashSale: EntryFieldTypes.EntryLink<TypeCardSkeleton>;
  newArrivalsTitle: EntryFieldTypes.Symbol;
  newArrivalsCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
}

export type TypeHomeSkeleton = EntrySkeletonType<TypeHomeFields, "home">;
export type TypeHome<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeHomeSkeleton,
  Modifiers,
  Locales
>;

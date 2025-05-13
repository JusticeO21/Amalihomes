import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLanguageSkeleton } from "./TypeLanguage";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";

export interface TypeCountryFields {
  country?: EntryFieldTypes.Symbol;
  otherName?: EntryFieldTypes.Symbol;
  defaultLanguage?: EntryFieldTypes.EntryLink<TypeLanguageSkeleton>;
  salesRepresentative: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
}

export type TypeCountrySkeleton = EntrySkeletonType<TypeCountryFields, "country">;
export type TypeCountry<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCountrySkeleton,
  Modifiers,
  Locales
>;

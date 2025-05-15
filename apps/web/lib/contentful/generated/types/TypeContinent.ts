import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContinentCardsSkeleton } from "./TypeContinentCards";
import type { TypeCountrySkeleton } from "./TypeCountry";

export interface TypeContinentFields {
  continent: EntryFieldTypes.Symbol;
  cards?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContinentCardsSkeleton>>;
  countries: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCountrySkeleton>>;
}

export type TypeContinentSkeleton = EntrySkeletonType<TypeContinentFields, "continent">;
export type TypeContinent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeContinentSkeleton,
  Modifiers,
  Locales
>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCountrySkeleton } from "./TypeCountry";
import type { TypeLinkSkeleton } from "./TypeLink";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";

export interface TypeContactUsFields {
  image: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  salesRepresentative: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
  pageReps: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
  countryReps: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCountrySkeleton>>;
  formTitle: EntryFieldTypes.Symbol;
  inputNameLabel: EntryFieldTypes.Symbol;
  inputNamePlaceholder: EntryFieldTypes.Symbol;
  inputEmailLabel: EntryFieldTypes.Symbol;
  inputEmailPlaceholder: EntryFieldTypes.Symbol;
  inputMessageLabel: EntryFieldTypes.Symbol;
  inputMessagePlaceholder: EntryFieldTypes.Symbol;
  ctaLabel: EntryFieldTypes.Symbol;
}

export type TypeContactUsSkeleton = EntrySkeletonType<TypeContactUsFields, "contactUs">;
export type TypeContactUs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeContactUsSkeleton,
  Modifiers,
  Locales
>;

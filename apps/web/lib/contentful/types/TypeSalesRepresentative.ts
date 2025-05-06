import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSalesRepresentativeFields {
  profile: EntryFieldTypes.AssetLink;
  name: EntryFieldTypes.Symbol;
  role: EntryFieldTypes.Symbol;
  phoneNumber: EntryFieldTypes.Symbol;
  email?: EntryFieldTypes.Symbol;
}

export type TypeSalesRepresentativeSkeleton = EntrySkeletonType<TypeSalesRepresentativeFields, "salesRepresentative">;
export type TypeSalesRepresentative<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeSalesRepresentativeSkeleton,
  Modifiers,
  Locales
>;

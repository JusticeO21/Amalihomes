import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
export interface TypeContactsFields {
  contacts: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  label: EntryFieldTypes.Symbol;
}

export type TypeContactsSkeleton = EntrySkeletonType<TypeContactsFields, "contacts">;
export type TypeContacts<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeContactsSkeleton,
  Modifiers,
  Locales
>;

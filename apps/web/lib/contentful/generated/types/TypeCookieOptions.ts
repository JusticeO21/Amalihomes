import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCookieOptionsFields {
  testStrict: EntryFieldTypes.Symbol;
  performance: EntryFieldTypes.Symbol;
  targeting: EntryFieldTypes.Symbol;
  functionality: EntryFieldTypes.Symbol;
  unclassified: EntryFieldTypes.Symbol;
}

export type TypeCookieOptionsSkeleton = EntrySkeletonType<TypeCookieOptionsFields, "cookieOptions">;
export type TypeCookieOptions<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCookieOptionsSkeleton,
  Modifiers,
  Locales
>;

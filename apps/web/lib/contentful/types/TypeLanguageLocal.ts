import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLanguageLocalFields {
  country: EntryFieldTypes.Symbol;
  languages: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  languageCode: EntryFieldTypes.Symbol;
  otherName?: EntryFieldTypes.Symbol;
}

export type TypeLanguageLocalSkeleton = EntrySkeletonType<TypeLanguageLocalFields, "languageLocal">;
export type TypeLanguageLocal<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeLanguageLocalSkeleton,
  Modifiers,
  Locales
>;

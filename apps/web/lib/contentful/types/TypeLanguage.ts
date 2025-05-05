import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLanguageFields {
    language: EntryFieldTypes.Symbol;
    languageCode: EntryFieldTypes.Symbol;
}

export type TypeLanguageSkeleton = EntrySkeletonType<TypeLanguageFields, "language">;
export type TypeLanguage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLanguageSkeleton, Modifiers, Locales>;

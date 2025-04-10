import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLanguageLocalSkeleton } from "./TypeLanguageLocal";

export interface TypeLanguagesFields {
    languages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLanguageLocalSkeleton>>;
    label: EntryFieldTypes.Symbol;
}

export type TypeLanguagesSkeleton = EntrySkeletonType<TypeLanguagesFields, "languages">;
export type TypeLanguages<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLanguagesSkeleton, Modifiers, Locales>;

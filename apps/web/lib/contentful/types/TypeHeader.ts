import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCountrySkeleton } from "./TypeCountry";
import type { TypeLanguageSkeleton } from "./TypeLanguage";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeHeaderFields {
    title?: EntryFieldTypes.Symbol;
    logo: EntryFieldTypes.AssetLink;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
    countries: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCountrySkeleton>>;
    languages: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLanguageSkeleton>>;
}

export type TypeHeaderSkeleton = EntrySkeletonType<TypeHeaderFields, "header">;
export type TypeHeader<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeaderSkeleton, Modifiers, Locales>;

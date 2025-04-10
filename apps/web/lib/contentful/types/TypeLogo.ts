import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeLogoFields {
    alt: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
}

export type TypeLogoSkeleton = EntrySkeletonType<TypeLogoFields, "logo">;
export type TypeLogo<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLogoSkeleton, Modifiers, Locales>;

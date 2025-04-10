import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNavLinkFields {
    label: EntryFieldTypes.Symbol;
    href: EntryFieldTypes.Symbol;
}

export type TypeNavLinkSkeleton = EntrySkeletonType<TypeNavLinkFields, "navLink">;
export type TypeNavLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNavLinkSkeleton, Modifiers, Locales>;

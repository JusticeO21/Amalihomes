import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavLinkSkeleton } from "./TypeNavLink";

export interface TypeFooterItemFields {
    label: EntryFieldTypes.Symbol;
    links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavLinkSkeleton>>;
}

export type TypeFooterItemSkeleton = EntrySkeletonType<TypeFooterItemFields, "footerItem">;
export type TypeFooterItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeFooterItemSkeleton, Modifiers, Locales>;

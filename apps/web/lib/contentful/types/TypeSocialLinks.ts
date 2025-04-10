import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSocialLinkItemSkeleton } from "./TypeSocialLinkItem";

export interface TypeSocialLinksFields {
    links?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialLinkItemSkeleton>>;
    label: EntryFieldTypes.Symbol;
}

export type TypeSocialLinksSkeleton = EntrySkeletonType<TypeSocialLinksFields, "socialLinks">;
export type TypeSocialLinks<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialLinksSkeleton, Modifiers, Locales>;

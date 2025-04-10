import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSocialLinkItemFields {
    label: EntryFieldTypes.Symbol;
    href: EntryFieldTypes.Symbol;
    icon: EntryFieldTypes.AssetLink;
}

export type TypeSocialLinkItemSkeleton = EntrySkeletonType<TypeSocialLinkItemFields, "socialLinkItem">;
export type TypeSocialLinkItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSocialLinkItemSkeleton, Modifiers, Locales>;

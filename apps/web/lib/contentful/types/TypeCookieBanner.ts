import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeCookieBannerFields {
    image: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    ctaLabel1: EntryFieldTypes.Symbol;
    ctaLabel2: EntryFieldTypes.Symbol;
}

export type TypeCookieBannerSkeleton = EntrySkeletonType<TypeCookieBannerFields, "cookieBanner">;
export type TypeCookieBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeCookieBannerSkeleton, Modifiers, Locales>;

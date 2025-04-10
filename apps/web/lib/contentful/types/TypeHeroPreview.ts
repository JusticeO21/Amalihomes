import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroPreviewFields {
    headline: EntryFieldTypes.Symbol;
    subtext: EntryFieldTypes.Text;
    ctaText?: EntryFieldTypes.Symbol;
    ctaLink?: EntryFieldTypes.Symbol;
    heroImages: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    secondaryCtaText?: EntryFieldTypes.Symbol;
    secondaryCtaUrl?: EntryFieldTypes.Symbol;
}

export type TypeHeroPreviewSkeleton = EntrySkeletonType<TypeHeroPreviewFields, "heroPreview">;
export type TypeHeroPreview<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHeroPreviewSkeleton, Modifiers, Locales>;

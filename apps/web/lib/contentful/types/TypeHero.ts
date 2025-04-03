import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHeroFields {
  headline?: EntryFieldTypes.Symbol;
  subtext?: EntryFieldTypes.Text;
  ctaText?: EntryFieldTypes.Symbol;
  ctaLink?: EntryFieldTypes.Symbol;
  heroImage?: EntryFieldTypes.AssetLink;
  secondaryCtaText?: EntryFieldTypes.Symbol;
  secondaryCtaUrl?: EntryFieldTypes.Symbol;
}

export type TypeHeroSkeleton = EntrySkeletonType<TypeHeroFields, "hero">;
export type TypeHero<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeHeroSkeleton,
  Modifiers,
  Locales
>;

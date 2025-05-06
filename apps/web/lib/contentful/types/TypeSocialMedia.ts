import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeSocialMediaFields {
  title: EntryFieldTypes.Symbol<"Facebook" | "Instagram" | "LinkedIn" | "X (Twitter)" | "Youtube">;
  url: EntryFieldTypes.Symbol;
  icon: EntryFieldTypes.AssetLink;
}

export type TypeSocialMediaSkeleton = EntrySkeletonType<TypeSocialMediaFields, "socialMedia">;
export type TypeSocialMedia<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeSocialMediaSkeleton,
  Modifiers,
  Locales
>;

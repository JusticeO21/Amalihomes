import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFooterLinksSkeleton } from "./TypeFooterLinks";
import type { TypeLinkSkeleton } from "./TypeLink";
import type { TypeSocialMediaSkeleton } from "./TypeSocialMedia";

export interface TypeFooterFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  inputPlaceholder: EntryFieldTypes.Symbol;
  privacyDescription: EntryFieldTypes.Symbol;
  privacyLink: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
  ctaLabel: EntryFieldTypes.Symbol;
  links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeFooterLinksSkeleton>>;
  contactUs: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  socials: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeSocialMediaSkeleton>>;
  copyright: EntryFieldTypes.Symbol;
  legalLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeFooterSkeleton,
  Modifiers,
  Locales
>;

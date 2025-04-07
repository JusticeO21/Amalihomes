import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeContactsSkeleton } from "./TypeContacts";
import type { TypeFooterItemSkeleton } from "./TypeFooterItem";
import type { TypeNewsLetterSkeleton } from "./TypeNewsLetter";
import type { TypeSocialLinksSkeleton } from "./TypeSocialLinks";

export interface TypeFooterFields {
  label: EntryFieldTypes.Symbol;
  newsLetter?: EntryFieldTypes.EntryLink<TypeNewsLetterSkeleton>;
  aboutUs?: EntryFieldTypes.EntryLink<TypeFooterItemSkeleton>;
  quickLinks?: EntryFieldTypes.EntryLink<TypeFooterItemSkeleton>;
  legalService?: EntryFieldTypes.EntryLink<TypeFooterItemSkeleton>;
  contacts?: EntryFieldTypes.EntryLink<TypeContactsSkeleton>;
  socialLinks?: EntryFieldTypes.EntryLink<TypeSocialLinksSkeleton>;
}

export type TypeFooterSkeleton = EntrySkeletonType<TypeFooterFields, "footer">;
export type TypeFooter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeFooterSkeleton,
  Modifiers,
  Locales
>;

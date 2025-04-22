import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";

export interface TypeFooterLinksFields {
  title: EntryFieldTypes.Symbol;
  links: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLinkSkeleton>>;
}

export type TypeFooterLinksSkeleton = EntrySkeletonType<TypeFooterLinksFields, "footerLinks">;
export type TypeFooterLinks<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeFooterLinksSkeleton,
  Modifiers,
  Locales
>;

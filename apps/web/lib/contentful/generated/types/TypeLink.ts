import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";

export interface TypeLinkFields {
  label: EntryFieldTypes.Symbol;
  link: EntryFieldTypes.Symbol<
    "about" | "careers" | "cart" | "cookie" | "faqs" | "home" | "news" | "offers" | "privacy" | "shop" | "terms"
  >;
  pageRep?: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
}

export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeLinkSkeleton,
  Modifiers,
  Locales
>;

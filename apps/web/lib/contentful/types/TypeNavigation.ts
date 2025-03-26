import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavLinkSkeleton } from "./TypeNavLink";

export interface TypeNavigationFields {
  navigationLinks: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeNavLinkSkeleton>>;
  label?: EntryFieldTypes.Symbol;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeNavigationSkeleton,
  Modifiers,
  Locales
>;

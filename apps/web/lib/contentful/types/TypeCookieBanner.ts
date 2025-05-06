import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCookieOptionsSkeleton } from "./TypeCookieOptions";

export interface TypeCookieBannerFields {
  image: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  customizeButtonText: EntryFieldTypes.Symbol;
  rejectButtonText: EntryFieldTypes.Symbol;
  consentButtonText: EntryFieldTypes.Symbol;
  cookieOptions?: EntryFieldTypes.EntryLink<TypeCookieOptionsSkeleton>;
}

export type TypeCookieBannerSkeleton = EntrySkeletonType<TypeCookieBannerFields, "cookieBanner">;
export type TypeCookieBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeCookieBannerSkeleton,
  Modifiers,
  Locales
>;

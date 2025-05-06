import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeTeamCardFields {
  image: EntryFieldTypes.AssetLink;
  name: EntryFieldTypes.Symbol;
  role: EntryFieldTypes.Symbol;
}

export type TypeTeamCardSkeleton = EntrySkeletonType<TypeTeamCardFields, "teamCard">;
export type TypeTeamCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeTeamCardSkeleton,
  Modifiers,
  Locales
>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeHistoryCardFields {
  title: EntryFieldTypes.Symbol;
  value: EntryFieldTypes.Symbol;
}

export type TypeHistoryCardSkeleton = EntrySkeletonType<TypeHistoryCardFields, "historyCard">;
export type TypeHistoryCard<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeHistoryCardSkeleton,
  Modifiers,
  Locales
>;

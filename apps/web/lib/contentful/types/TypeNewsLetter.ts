import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewsLetterFields {
  title: EntryFieldTypes.Symbol;
  subTitle: EntryFieldTypes.Symbol;
}

export type TypeNewsLetterSkeleton = EntrySkeletonType<TypeNewsLetterFields, "newsLetter">;
export type TypeNewsLetter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeNewsLetterSkeleton,
  Modifiers,
  Locales
>;

import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeQuestionAnswerSkeleton } from "./TypeQuestionAnswer";

export interface TypeQuestionCategoryFields {
  title: EntryFieldTypes.Symbol;
  questionsAnswers: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeQuestionAnswerSkeleton>>;
}

export type TypeQuestionCategorySkeleton = EntrySkeletonType<TypeQuestionCategoryFields, "questionCategory">;
export type TypeQuestionCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeQuestionCategorySkeleton,
  Modifiers,
  Locales
>;

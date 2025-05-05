import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeQuestionAnswerFields {
    question: EntryFieldTypes.Symbol;
    answer: EntryFieldTypes.RichText;
}

export type TypeQuestionAnswerSkeleton = EntrySkeletonType<TypeQuestionAnswerFields, "questionAnswer">;
export type TypeQuestionAnswer<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeQuestionAnswerSkeleton, Modifiers, Locales>;

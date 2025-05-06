import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeQuestionCategorySkeleton } from "./TypeQuestionCategory";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";

export interface TypeFaqsFields {
  mainImage: EntryFieldTypes.AssetLink;
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  questionCategories: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeQuestionCategorySkeleton>>;
  salesRep: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
}

export type TypeFaqsSkeleton = EntrySkeletonType<TypeFaqsFields, "faqs">;
export type TypeFaqs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeFaqsSkeleton,
  Modifiers,
  Locales
>;

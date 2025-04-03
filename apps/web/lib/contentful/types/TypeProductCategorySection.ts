import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeProductCategorySectionFields {
  heading?: EntryFieldTypes.Symbol;
  categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeProductCategorySectionSkeleton = EntrySkeletonType<
  TypeProductCategorySectionFields,
  "productCategorySection"
>;
export type TypeProductCategorySection<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypeProductCategorySectionSkeleton, Modifiers, Locales>;

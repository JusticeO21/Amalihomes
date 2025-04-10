import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeFlashSaleSectionSkeleton } from "./TypeFlashSaleSection";
import type { TypeHeroSkeleton } from "./TypeHero";
import type { TypeNewArrivalSectionSkeleton } from "./TypeNewArrivalSection";
import type { TypeProductCategorySectionSkeleton } from "./TypeProductCategorySection";
import type { TypeWhyChooseUsSkeleton } from "./TypeWhyChooseUs";

export interface TypeHomePageFields {
    title?: EntryFieldTypes.Symbol;
    heroSection: EntryFieldTypes.EntryLink<TypeHeroSkeleton>;
    whyChooseUs: EntryFieldTypes.EntryLink<TypeWhyChooseUsSkeleton>;
    productCategories?: EntryFieldTypes.EntryLink<TypeProductCategorySectionSkeleton>;
    flashSale?: EntryFieldTypes.EntryLink<TypeFlashSaleSectionSkeleton>;
    newArrivals?: EntryFieldTypes.EntryLink<TypeNewArrivalSectionSkeleton>;
}

export type TypeHomePageSkeleton = EntrySkeletonType<TypeHomePageFields, "homePage">;
export type TypeHomePage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeHomePageSkeleton, Modifiers, Locales>;

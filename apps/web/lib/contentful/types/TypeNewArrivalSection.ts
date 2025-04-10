import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeNewArrivalSectionFields {
    heading: EntryFieldTypes.Symbol;
    arrivals: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<EntrySkeletonType>>;
}

export type TypeNewArrivalSectionSkeleton = EntrySkeletonType<TypeNewArrivalSectionFields, "newArrivalSection">;
export type TypeNewArrivalSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewArrivalSectionSkeleton, Modifiers, Locales>;

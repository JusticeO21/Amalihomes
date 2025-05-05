import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeContinentCardsFields {
    cardImage: EntryFieldTypes.AssetLink;
    country: EntryFieldTypes.Symbol;
}

export type TypeContinentCardsSkeleton = EntrySkeletonType<TypeContinentCardsFields, "continentCards">;
export type TypeContinentCards<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContinentCardsSkeleton, Modifiers, Locales>;

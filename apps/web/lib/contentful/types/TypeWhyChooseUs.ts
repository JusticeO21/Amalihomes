import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeUspCardItemPSkeleton } from "./TypeUspCardItemP";

export interface TypeWhyChooseUsFields {
    heading: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    image: EntryFieldTypes.AssetLink;
    cards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeUspCardItemPSkeleton>>;
}

export type TypeWhyChooseUsSkeleton = EntrySkeletonType<TypeWhyChooseUsFields, "whyChooseUs">;
export type TypeWhyChooseUs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeWhyChooseUsSkeleton, Modifiers, Locales>;

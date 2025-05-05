import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";

export interface TypeContactUsFields {
    image: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
    salesRepresentative: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
    formTitle: EntryFieldTypes.Symbol;
    inputNameLabel: EntryFieldTypes.Symbol;
    inputNamePlaceholder: EntryFieldTypes.Symbol;
    inputEmailLabel: EntryFieldTypes.Symbol;
    inputEmailPlaceholder: EntryFieldTypes.Symbol;
    inputMessageLabel: EntryFieldTypes.Symbol;
    inputMessagePlaceholder: EntryFieldTypes.Symbol;
    ctaLabel: EntryFieldTypes.Symbol;
}

export type TypeContactUsSkeleton = EntrySkeletonType<TypeContactUsFields, "contactUs">;
export type TypeContactUs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeContactUsSkeleton, Modifiers, Locales>;

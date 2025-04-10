import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeUspCardItemPFields {
    icon: EntryFieldTypes.AssetLink;
    title: EntryFieldTypes.Symbol;
    description: EntryFieldTypes.Text;
}

export type TypeUspCardItemPSkeleton = EntrySkeletonType<TypeUspCardItemPFields, "uspCardItemP">;
export type TypeUspCardItemP<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeUspCardItemPSkeleton, Modifiers, Locales>;

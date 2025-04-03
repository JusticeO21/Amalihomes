import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeUspCardItemFields {
  icon?: EntryFieldTypes.AssetLink;
  title?: EntryFieldTypes.Symbol;
  description?: EntryFieldTypes.Text;
}

export type TypeUspCardItemSkeleton = EntrySkeletonType<TypeUspCardItemFields, "uspCardItem">;
export type TypeUspCardItem<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeUspCardItemSkeleton,
  Modifiers,
  Locales
>;

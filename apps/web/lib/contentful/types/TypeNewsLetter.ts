import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeNavLinkSkeleton } from "./TypeNavLink";

export interface TypeNewsLetterFields {
    title: EntryFieldTypes.Symbol;
    subTitle: EntryFieldTypes.Symbol;
    buttonText: EntryFieldTypes.Symbol;
    inputText: EntryFieldTypes.Symbol;
    subscriptionDescription: EntryFieldTypes.Symbol;
    privacyLink: EntryFieldTypes.EntryLink<TypeNavLinkSkeleton>;
}

export type TypeNewsLetterSkeleton = EntrySkeletonType<TypeNewsLetterFields, "newsLetter">;
export type TypeNewsLetter<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeNewsLetterSkeleton, Modifiers, Locales>;

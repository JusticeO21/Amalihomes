import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeCardSkeleton } from "./TypeCard";
import type { TypeContinentSkeleton } from "./TypeContinent";
import type { TypeHistoryCardSkeleton } from "./TypeHistoryCard";
import type { TypeSalesRepresentativeSkeleton } from "./TypeSalesRepresentative";
import type { TypeTeamCardSkeleton } from "./TypeTeamCard";

export interface TypeAboutUsFields {
  title: EntryFieldTypes.Symbol;
  description: EntryFieldTypes.Text;
  mainImage: EntryFieldTypes.AssetLink;
  historyTitle: EntryFieldTypes.Symbol;
  historyDescription: EntryFieldTypes.Text;
  historyCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeHistoryCardSkeleton>>;
  uspTitle: EntryFieldTypes.Symbol;
  uspDescription: EntryFieldTypes.Text;
  uspCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCardSkeleton>>;
  uspImage: EntryFieldTypes.AssetLink;
  locationTitle: EntryFieldTypes.Symbol;
  locationDescription: EntryFieldTypes.Text;
  location: EntryFieldTypes.Symbol;
  teamTitle: EntryFieldTypes.Symbol;
  teamDescription: EntryFieldTypes.Text;
  teamCards: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTeamCardSkeleton>>;
  showroomTitle: EntryFieldTypes.Symbol;
  showroomDescription: EntryFieldTypes.Text;
  continents: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeContinentSkeleton>>;
  salesRep: EntryFieldTypes.EntryLink<TypeSalesRepresentativeSkeleton>;
}

export type TypeAboutUsSkeleton = EntrySkeletonType<TypeAboutUsFields, "aboutUs">;
export type TypeAboutUs<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<
  TypeAboutUsSkeleton,
  Modifiers,
  Locales
>;

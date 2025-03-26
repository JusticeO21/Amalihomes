import { getEntries } from "lib/contentful/contentful";
import { TypeLanguageLocalSkeleton } from "lib/contentful/types";
import { Country, LanguageListing } from "./language-listing";

export const LanguageSection = async () => {
  const response = await getEntries<TypeLanguageLocalSkeleton>("languageLocal");
  const countries = response.items.map((item) => item.fields) as Country[];
  return (
    <section className="flex items-center justify-end py-16 px-32 lg:px-64 bg-Gray-fill-dark p-12 z-100">
      <LanguageListing countries={countries} />
    </section>
  );
};

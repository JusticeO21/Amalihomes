import { Container } from "@amalihomes/ui/components/container";
import { getEntries } from "lib/contentful/contentful";
import { TypeLanguageLocalSkeleton } from "lib/contentful/types";
import { LanguageListing } from "../language-bar/language-listing";
import { Country } from "./language-bar-drawer";

export const LanguageSection = async () => {
  const response = await getEntries<TypeLanguageLocalSkeleton>("languageLocal");
  const countries = response.items.map((item) => item.fields) as Country[];
  return (
    <section className="bg-Grey-stroke-weaker z-100">
      <Container
        className="flex items-center justify-end py-12 bg-transparent px-16 md:px-32 lg:px-64 relative h-56 my-0"
        paddingX={0}
        paddingY={0}
      >
        <LanguageListing countries={countries} />
      </Container>
    </section>
  );
};

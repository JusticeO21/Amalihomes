import { getEntries } from "lib/contentful/contentful";
import { TypeLanguageLocalSkeleton } from "lib/contentful/types";
import { Country, LanguageListing } from "../language-bar/language-listing";
import { Container } from "@amalihomes/ui/components/container";

export const LanguageSection = async () => {
  const response = await getEntries<TypeLanguageLocalSkeleton>("languageLocal");
  const countries = response.items.map((item) => item.fields) as Country[];
  return (
    <section className="bg-Gray-fill-dark z-100">
      <Container
        paddingY={0}
        className="flex items-center justify-end py-16 bg-transparent"
      >
        <LanguageListing countries={countries} />
      </Container>
    </section>
  );
};

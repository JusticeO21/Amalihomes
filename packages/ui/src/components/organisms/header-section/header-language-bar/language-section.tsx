import { Container } from "@amalihomes/ui";

export const HeaderLanguageSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-Grey-stroke-weaker z-100 w-full">
      <Container
        className="flex items-center justify-end py-12 bg-transparent px-16 md:px-32 lg:px-64 relative h-56 my-0 w-full"
        paddingX={0}
        paddingY={0}
      >
        {children}
      </Container>
    </section>
  );
};

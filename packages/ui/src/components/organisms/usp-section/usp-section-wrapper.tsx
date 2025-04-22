import { Container } from "../../atoms";

export const UspSectionWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <section
      aria-labelledby="usp-heading"
      aria-label="Unique selling points section"
      id="usp"
      className={className}
    >
      <Container className="grid lg:grid-cols-[1.8fr_1.2fr] gap-[47px] bg-white">{children}</Container>
    </section>
  );
};

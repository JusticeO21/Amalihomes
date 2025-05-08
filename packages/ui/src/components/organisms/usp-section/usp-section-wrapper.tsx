import { Container } from "../../atoms";

export const UspSectionWrapper = ({
  children,
  className,
  gridClass,
}: {
  children: React.ReactNode;
  className?: string;
  gridClass?: string;
}) => {
  return (
    <section
      aria-labelledby="usp-heading"
      aria-label="Unique selling points section"
      id="usp"
      className={className}
    >
      <Container className={`grid lg:grid-cols-[1.8fr_1.2fr] gap-[47px] bg-white ${gridClass}`}>{children}</Container>
    </section>
  );
};

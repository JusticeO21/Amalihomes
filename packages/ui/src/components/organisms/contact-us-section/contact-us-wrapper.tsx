import { cn } from "../../../lib/utils";
import { Container, Image } from "../../atoms";
import { ContactUsSectionProps } from "./types";

const ContactUsWrapper = ({
  backgroundImageUrl,
  backgroundImageAlt,
  className,
  rowReversed = false,
  children,
}: ContactUsSectionProps) => {
  return (
    <div className={cn("relative w-full", className)}>
      {backgroundImageUrl && (
        <>
          <Image
            src={backgroundImageUrl}
            alt={backgroundImageAlt ?? "contact us background"}
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-[1px]"></div>
        </>
      )}
      <Container
        marginY={0}
        className={`relative z-10 space-y-24 md:gap-24 flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:items-start bg-transparent ${rowReversed ? "lg:flex-row-reverse" : ""}`}
      >
        {children}
      </Container>
    </div>
  );
};

export default ContactUsWrapper;

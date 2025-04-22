import { cn } from "../../../lib/utils";
import { Container } from "../../atoms";

export const UspContentWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className={cn("grid gap-40 mx-0", className)}
    >
      {children}
    </Container>
  );
};

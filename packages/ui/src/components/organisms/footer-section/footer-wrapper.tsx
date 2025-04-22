import { Container } from "../../atoms";
import { ToastContainer } from "../../molecules";

export const FooterWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <footer className="bg-Neutral-900">
      <Container
        paddingX={0}
        paddingY={0}
        className="flex flex-col gap-y-32 md:gap-y-80 px-16 py-24 md:p-32 lg:p-64 bg-transparent my-0 md:w-834 lg:w-full m-y-0"
      >
        {children}
      </Container>
      <ToastContainer position={"bottom-right"} />
    </footer>
  );
};

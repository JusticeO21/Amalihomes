"use client";
import { Container } from "../../../atoms";

export const HeaderNavigationSectionWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className=" bg-white has-[div#search-bar]:fixed has-[div#search-bar]:inset-0 has-[div#search-bar]:z-1000 has-[div#search-bar]:h-screen">
      <div className="border-b border-Grey-fill">
        <Container
          paddingX={0}
          paddingY={0}
          className="relative flex items-center justify-between py-16 px-16 md:px-32 lg:px-64  h-56 lg:h-80 my-0"
        >
          {children}
        </Container>
      </div>
    </nav>
  );
};

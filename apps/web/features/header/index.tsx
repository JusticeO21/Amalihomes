import { LanguageBar } from "features/language-bar";
import { NavigationSection } from "./navigation-section";

export const Header = () => {
  return (
    <header className="flex flex-col gap-0 sticky top-0 z-50">
      <LanguageBar />
      <NavigationSection />
    </header>
  );
};

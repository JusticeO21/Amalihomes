import { LanguageBar } from "features/language-bar";
import { NavigationSection } from "./navigation-section";

export const Header = () => {
  return (
    <header className="flex flex-col relative gap-0">
      <LanguageBar />
      <NavigationSection />
    </header>
  );
};

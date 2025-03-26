import { LanguageSection } from "./language-section";
import { NavigationSection } from "./navigation-section";

export const Header = () => {
  return (
    <header className="flex flex-col relative">
      <LanguageSection />
      <NavigationSection />
    </header>
  );
};

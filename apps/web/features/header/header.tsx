import { headerLoader } from "./header-loader";
import { AppHearNavigation } from "./header-section";

export const AppHeader = async () => {
  const { countries, languages, links, logo } = await headerLoader();

  return (
    <AppHearNavigation
      links={links}
      logo={logo}
      countries={countries}
      languages={languages}
    />
  );
};

import { bannerLoader } from "../analytics/banner-loader";
import { headerLoader } from "./header-loader";
import { AppHeaderSection } from "./header-section";

export const AppHeader = async () => {
  const { countries, languages, links, logo } = await headerLoader();
  const banner = await bannerLoader();

  return (
    <AppHeaderSection
      links={links}
      logo={logo}
      countries={countries}
      languages={languages}
      banner={banner}
    />
  );
};

import { IconGlobe, Typography } from "@amalihomes/ui";

interface LanguageSelectorButtonProps {
  country: string;
  language: string;
  onClick: () => void;
}

export const HeaderLanguageSelectorButton = ({ country, language, onClick }: LanguageSelectorButtonProps) => (
  <button
    className="bg-white rounded-sm px-8 py-4 min-w-155 h-32 cursor-pointer"
    aria-label={`Select language: ${language}, Country: ${country}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-center gap-12">
      <div className="flex items-center gap-4">
        <IconGlobe aria-hidden="true" />
        <Typography
          as="p"
          weight={"bold"}
          size={"sm"}
          className="text-Grey-text-weak font-lato"
        >
          {country}
        </Typography>
      </div>
      <div
        className="h-24 w-1 bg-Gray-fill-bright"
        aria-hidden="true"
      ></div>
      <Typography
        as="p"
        className="text-Grey-text-weak font-lato"
        weight={"bold"}
        size={"sm"}
      >
        {language}
      </Typography>
    </div>
  </button>
);

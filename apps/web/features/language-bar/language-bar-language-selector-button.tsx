import { Typography } from "@amalihomes/ui/components/typography";
import { Globe } from "lucide-react";

interface LanguageSelectorButtonProps {
  country: string;
  language: string;
  onClick: () => void;
}

export const LanguageSelectorButton = ({ country, language, onClick }: LanguageSelectorButtonProps) => (
  <button
    className="bg-white rounded-sm px-8 py-4 min-w-155 h-32"
    aria-label={`Select language: ${language}, Country: ${country}`}
    onClick={onClick}
  >
    <div className="flex items-center justify-center gap-12">
      <div className="flex items-center gap-4">
        <Globe
          aria-hidden="true"
          className="text-grey-text-weak"
        />
        <Typography
          as="p"
          color={"text-Grey-text-weak"}
          weight={"bold"}
          size={"sm"}
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
        color={"text-grey-text-weak"}
        weight={"bold"}
        size={"sm"}
      >
        {language}
      </Typography>
    </div>
  </button>
);

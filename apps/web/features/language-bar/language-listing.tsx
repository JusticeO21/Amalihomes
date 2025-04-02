"use client";

import { Typography } from "@amalihomes/ui/components/typography";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle } from "@amalihomes/ui/components/drawer";
import { Globe } from "lucide-react";
import { useState } from "react";
import { Button } from "@amalihomes/ui/components/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui/components/select";

export interface Country {
  country: string;
  languages: string[];
}

export interface LanguageListingProps {
  countries: Country[];
}

export const LanguageListing = ({ countries }: LanguageListingProps) => {
  const [language, setLanguage] = useState<string>("English");
  const [country, setCountry] = useState<string>("United States");
  const [languages, setLanguages] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const handleSetCountry = (country: string) => {
    const val = countries.find((tempCountry) => tempCountry.country.toLowerCase() === country.toLowerCase());

    if (val) {
      setCountry(val.country);
      setLanguages(val.languages);
    }
  };

  const handleSetLanguage = (language: string) => {
    setLanguage(language);
  };
  return (
    <>
      <button
        className="bg-white rounded-sm px-8 py-4 "
        aria-label={`Select language: ${language}, Country: ${country}`}
        onClick={() => setOpen(true)}
      >
        <div className="flex items-center justify-center gap-12">
          <div className="flex items-center gap-4">
            <Globe
              aria-hidden="true"
              className="text-grey-text-weak"
            />
            <Typography
              as="p"
              color={"text-grey-text-weak"}
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

      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContent
          side="right"
          className="top-112-8 lg:top-144 border-0  bg-white w-full sm:max-w-max md:w-549 py-40 px-16 md:px-40 flex flex-col gap-44"
        >
          <DrawerHeader>
            <DrawerTitle>
              <Typography
                size="base"
                weight="bold"
                colors="text-grey-text-weak"
                className="text-left  text-24"
              >
                Select your language and Country
              </Typography>
            </DrawerTitle>
          </DrawerHeader>
          <div className="p-4 flex flex-col gap-16">
            <label
              className="flex flex-col gap-4"
              htmlFor="country"
            >
              <span className="color-Grey-text-strong font-bold">Country</span>
              <Select
                onChange={handleSetCountry}
                className="w-full"
                defaultValue={country}
              >
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map((country) => (
                    <SelectItem
                      key={country.country}
                      value={country.country}
                    >
                      {country.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
            <label
              className="flex flex-col gap-4"
              htmlFor="language"
            >
              <span className="color-Grey-text-strong font-bold">Language</span>
              <Select
                onChange={handleSetLanguage}
                className="w-full"
                defaultValue={language}
              >
                <SelectTrigger
                  id="language"
                  disabled={languages.length === 0}
                >
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  {languages.map((lang) => (
                    <SelectItem
                      key={lang}
                      value={lang}
                    >
                      {lang}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>
          </div>
          <DrawerFooter>
            <Button
              variant="primary"
              onClick={() => setOpen(false)}
              className="w-full flex items-center justify-center font-bold py-12 px-24"
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

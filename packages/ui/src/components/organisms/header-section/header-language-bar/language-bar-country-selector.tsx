import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui";
import { Country } from "./language-bar-drawer";

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: string;
  onChange: (country: string) => void;
}

export const CountrySelector = ({ countries, selectedCountry, onChange }: CountrySelectorProps) => (
  <Select
    onChange={onChange}
    className="w-full"
    defaultValue={selectedCountry}
    label="Country"
  >
    <SelectTrigger id="country">
      <SelectValue placeholder="Select country" />
    </SelectTrigger>
    <SelectContent>
      {countries.map((country) => (
        <SelectItem
          key={country.country}
          value={`${country.country} (${country.language.languageCode})`}
        >
          {country.country} ({country.language.languageCode})
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

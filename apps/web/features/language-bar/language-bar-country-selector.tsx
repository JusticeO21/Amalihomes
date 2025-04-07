import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui/components/select";
import { Country } from "./language-bar-drawer";

interface CountrySelectorProps {
  countries: Country[];
  selectedCountry: string;
  onChange: (country: string) => void;
}

export const CountrySelector = ({ countries, selectedCountry, onChange }: CountrySelectorProps) => (
  <label
    className="flex flex-col gap-4"
    htmlFor="country"
  >
    <span className="color-Grey-text-strong font-bold">Country</span>
    <Select
      onChange={onChange}
      className="w-full"
      defaultValue={selectedCountry}
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
);

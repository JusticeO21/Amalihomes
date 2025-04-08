import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@amalihomes/ui/components/select";
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
  >
    <SelectLabel
      className="color-Grey-text-strong font-bold"
      htmlFor="country"
    >
      Country
      <SelectTrigger id="country">
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
    </SelectLabel>
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
);

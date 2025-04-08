import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@amalihomes/ui/components/select";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onChange: (language: string) => void;
}

export const LanguageSelector = ({ languages, selectedLanguage, onChange }: LanguageSelectorProps) => (
  <Select
    onChange={onChange}
    className="w-full"
    defaultValue={selectedLanguage}
  >
    <SelectLabel
      className="color-Grey-text-strong font-bold"
      htmlFor="language"
    >
      Language
      <SelectTrigger
        id="language"
        disabled={languages.length === 0}
      >
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
    </SelectLabel>
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
);

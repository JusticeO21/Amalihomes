import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui/components/select";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onChange: (language: string) => void;
}

export const LanguageSelector = ({ languages, selectedLanguage, onChange }: LanguageSelectorProps) => (
  <label
    className="flex flex-col gap-4"
    htmlFor="language"
  >
    <span className="color-Grey-text-strong font-bold">Language</span>
    <Select
      onChange={onChange}
      className="w-full"
      defaultValue={selectedLanguage}
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
);

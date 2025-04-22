import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onChange: (language: string) => void;
}

export const LanguageSelector = ({ languages, selectedLanguage, onChange }: LanguageSelectorProps) =>
  languages && (
    <Select
      onChange={onChange}
      className="w-full"
      defaultValue={selectedLanguage}
      label="Language"
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
  );

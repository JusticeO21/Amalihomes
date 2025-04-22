"use client";
import { Search } from "lucide-react";
import { useState } from "react";
import { useSelectContext } from "./select-context";
import { SelectSearchProps } from "./types";
import { useDebounce } from "../../../hooks/use-debounce/use-debounce";

const SelectSearch = ({ onSearch }: SelectSearchProps) => {
  const [query, setQuery] = useState("");
  const { delay } = useSelectContext();

  const debouncedSearch = useDebounce((...args: unknown[]) => {
    const searchTerm = args[0] as string;
    onSearch(searchTerm.toLowerCase());
  }, delay);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <div
      id="search"
      className="flex items-center gap-12 w-full border rounded-lg p-12 border-Grey-stroke-strong text-body group focus-within:border-Grey-text-weak"
    >
      <Search
        size={20}
        className="text-Grey-stroke-strong"
      />
      <input
        type="text"
        id="search-input"
        value={query}
        onChange={handleChange}
        placeholder="search..."
        className="outline-none w-full"
      />
    </div>
  );
};
export default SelectSearch;

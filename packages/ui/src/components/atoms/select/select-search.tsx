"use client";
import { useState } from "react";
import { useDebounce } from "../../../hooks/use-debounce/use-debounce";
import { useSelectContext } from "./select-context";
import { SelectSearchProps } from "./types";

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
      className="w-full border-l-2 border-gray-400 text-gray-400 px-4 text-18 font-lato font-normal leading-26"
      onClick={(e) => e.stopPropagation()}
    >
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

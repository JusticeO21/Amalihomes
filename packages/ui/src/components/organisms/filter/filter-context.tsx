"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { FilterState, FilterContextType, FilterSection } from "./filter.types";

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

type FilterProviderProps = {
  filterSections: FilterSection[];
  sortingOptions?: FilterSection;
  defaultValues?: Partial<FilterState>;
  onFilterChange?: (state: FilterState) => void;
  children: React.ReactNode;
};

export const FilterProvider = ({
  filterSections,
  sortingOptions,
  defaultValues = {},
  onFilterChange,
  children,
}: FilterProviderProps) => {
  const initialState: FilterState = {
    checkboxes: Object.fromEntries(
      filterSections
        .filter((section) => !section.isRadio && !section.isSlider)
        .map((section) => [section.id, defaultValues.checkboxes?.[section.id] || []]),
    ),
    radios: Object.fromEntries(
      [...filterSections, ...(sortingOptions ? [sortingOptions] : [])]
        .filter((section) => section.isRadio)
        .map((section) => [section.id, defaultValues.radios?.[section.id] || null]),
    ),
    sliders: Object.fromEntries(
      filterSections
        .filter((section) => section.isSlider)
        .map((section) => [
          section.id,
          defaultValues.sliders?.[section.id] || {
            min: section.sliderConfig?.initialMin ?? section.sliderConfig?.min ?? 0,
            max: section.sliderConfig?.initialMax ?? section.sliderConfig?.max ?? 100,
          },
        ]),
    ),
  };

  const [state, setState] = useState<FilterState>(initialState);

  useEffect(() => {
    onFilterChange?.(state);
  }, [state, onFilterChange]);

  const toggleCheckbox = (sectionId: string, optionId: string) => {
    setState((prev) => {
      const currentSelection = prev.checkboxes[sectionId] || [];
      const newSelection = currentSelection.includes(optionId)
        ? currentSelection.filter((id) => id !== optionId)
        : [...currentSelection, optionId];

      return {
        ...prev,
        checkboxes: {
          ...prev.checkboxes,
          [sectionId]: newSelection,
        },
      };
    });
  };

  const selectRadio = (sectionId: string, optionId: string) => {
    setState((prev) => ({
      ...prev,
      radios: {
        ...prev.radios,
        [sectionId]: prev.radios[sectionId] === optionId ? null : optionId,
      },
    }));
  };

  const updateSlider = (sectionId: string, values: { min: number; max: number }) => {
    setState((prev) => ({
      ...prev,
      sliders: {
        ...prev.sliders,
        [sectionId]: values,
      },
    }));
  };

  const resetFilters = () => {
    setState(initialState);
  };

  return (
    <FilterContext.Provider
      value={{
        state,
        toggleCheckbox,
        selectRadio,
        updateSlider,
        resetFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

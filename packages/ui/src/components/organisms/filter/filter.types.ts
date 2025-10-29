export type FilterOption = {
  id: string;
  label: string;
};

export type FilterSection = {
  id: string;
  title: string;
  options?: FilterOption[];
  isRadio?: boolean;
  isSlider?: boolean;
  sliderConfig?: {
    min: number;
    max: number;
    initialMin?: number;
    initialMax?: number;
  };
};

export type FilterState = {
  checkboxes: Record<string, string[]>;
  radios: Record<string, string | null>;
  sliders: Record<string, { min: number; max: number }>;
};

export type FilterContextType = {
  state: FilterState;
  toggleCheckbox: (sectionId: string, optionId: string) => void;
  selectRadio: (sectionId: string, optionId: string) => void;
  updateSlider: (sectionId: string, values: { min: number; max: number }) => void;
  resetFilters: () => void;
};

export type FilterProps = {
  filterSections: FilterSection[];
  sortingOptions?: FilterSection;
  defaultValues?: Partial<FilterState>;
  onFilterChange?: (state: FilterState) => void;
  resetFilters?: () => void;
  className?: string;
  onResetFilters?: (resetFn: () => void) => void;
};

export type FilterSectionProps = {
  section: FilterSection;
  underline?: boolean;
  className?: string;
};

export type FilterOptionProps = {
  section: {
    id: string;
    isRadio?: boolean;
  };
  option: {
    id: string;
    label: string;
  };

  className?: string;
};

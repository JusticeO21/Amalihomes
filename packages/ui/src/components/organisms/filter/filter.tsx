"use client";
import React, { useEffect } from "react";
import { FilterProps } from "./filter.types";
import { FilterProvider, useFilter } from "./filter-context";
import { FilterSectionComponent } from "./filter-section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../atoms";

export const Filter: React.FC<FilterProps> = ({
  filterSections,
  sortingOptions,
  defaultValues = {},
  onFilterChange,
  className,
  onResetFilters,
}) => {
  return (
    <FilterProvider
      filterSections={filterSections}
      sortingOptions={sortingOptions}
      defaultValues={defaultValues}
      onFilterChange={onFilterChange}
    >
      <FilterContent
        className={className}
        filterSections={filterSections}
        sortingOptions={sortingOptions}
        setResetFilters={(resetFn) => {
          if (onResetFilters) {
            onResetFilters(resetFn);
          }
        }}
      />
    </FilterProvider>
  );
};

interface FilterContentProps {
  className?: string;
  filterSections: FilterProps["filterSections"];
  sortingOptions?: FilterProps["sortingOptions"];
  setResetFilters: (resetFn: () => void) => void;
}

const FilterContent: React.FC<FilterContentProps> = ({
  className,
  filterSections,
  sortingOptions,
  setResetFilters,
}) => {
  const { resetFilters } = useFilter();

  // Expose the resetFilters function to the parent component
  useEffect(() => {
    setResetFilters(resetFilters);
  }, [resetFilters, setResetFilters]);

  return (
    <div className={`w-[199px] px-0 ${className}`}>
      <Accordion className="w-full !px-0">
        <AccordionItem
          value="filter"
          className="w-full px-0"
        >
          <AccordionTrigger
            label="Filter"
            labelAs="h2"
            className="!bg-transparent !px-0 mb-[20px] rounded-none border-b border-gray-50 font-bold !text-[24px] text-gray-950"
          />
          <AccordionContent className="!bg-transparent w-full !px-0">
            {filterSections.map((section) => (
              <FilterSectionComponent
                key={section.id}
                section={section}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {sortingOptions && (
        <FilterSectionComponent
          section={sortingOptions}
          underline={true}
        />
      )}
    </div>
  );
};

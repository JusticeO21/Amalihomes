"use client";
import { FilterProps } from "./filter.types";
import { FilterProvider } from "./filter-context";
import { FilterSectionComponent } from "./filter-section";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../atoms";

export const Filter = ({
  filterSections,
  sortingOptions,
  defaultValues = {},
  onFilterChange,
  className,
}: FilterProps) => {
  return (
    <FilterProvider
      filterSections={filterSections}
      sortingOptions={sortingOptions}
      defaultValues={defaultValues}
      onFilterChange={onFilterChange}
    >
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
    </FilterProvider>
  );
};

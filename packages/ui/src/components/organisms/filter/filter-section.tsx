"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../atoms";
import { GridContainer } from "../../atoms";
import { FilterOption } from "./filter-option";
import { useFilter } from "./filter-context";
import { FilterSectionProps } from "./filter.types";
import { Slider } from "./slider";

export const FilterSectionComponent = ({ section, underline = false, className }: FilterSectionProps) => {
  const { updateSlider } = useFilter();

  if (section.isSlider && section.sliderConfig) {
    return (
      <Accordion className={`w-full !px-0 ${className}`}>
        <AccordionItem
          value={section.id}
          className="w-full"
        >
          <AccordionTrigger
            label={section.title}
            labelAs="h3"  
            className="!bg-transparent w-full !px-0 !text-[18px] text-gray-950 font-semibold tracking-[0] leading-[26px] whitespace-nowrap"
          />
          <AccordionContent className="!bg-transparent w-full !px-0">
            <Slider
              onChange={(values) => updateSlider(section.id, values)}
              showMiddleValue={true}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <Accordion className={`w-full !px-0 ${className}`}>
      <AccordionItem
        value={section.id}
        className="w-full"
      >
        <AccordionTrigger
          label={section.title}
          labelAs="h3"
          className={`!bg-transparent !px-0 ${underline ? "mb-[20px] rounded-none border-b border-gray-50 font-bold !text-[24px] text-gray-950" : "text-gray-950 font-semibold tracking-[0] leading-[26px] whitespace-nowrap !text-[18px]"}`}
        />
        <AccordionContent className="!bg-transparent w-full !px-0">
          <GridContainer
            gap="md"
            columns={1}
          >
            {section.options?.map((option) => (
              <FilterOption
                key={option.id}
                section={section}
                option={option}
              />
            ))}
          </GridContainer>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

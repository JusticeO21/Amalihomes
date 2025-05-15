"use client";
import { Checkbox } from "../../atoms";
import { useFilter } from "./filter-context";
import { FilterOptionProps } from "./filter.types";

export const FilterOption = ({ section, option, className }: FilterOptionProps) => {
  const { state, toggleCheckbox, selectRadio } = useFilter();

  if (section.isRadio) {
    return (
      <div className={`flex gap-8 items-center ${className}`}>
        <Checkbox
          className={`w-[22px] h-[22px] border border-gray-600 ${section.isRadio ? "rounded-full" : ""} ${state.radios[section.id] === option.id ? "border-none" : "border border-gray-600"}`}
          isChecked={state.radios[section.id] === option.id}
          checkIconColor="brand-500"
          onChange={() => selectRadio(section.id, option.id)}
        />
        <p className="text-base leading-6 text-gray-600">{option.label}</p>
      </div>
    );
  }

  return (
    <div className={`flex gap-8 items-center ${className}`}>
      <Checkbox
        className={`w-[22px] h-[22px] ${state.checkboxes[section.id]?.includes(option.id) ? "border-none" : "border border-gray-600"}`}
        isChecked={state.checkboxes[section.id]?.includes(option.id) || false}
        onChange={() => toggleCheckbox(section.id, option.id)}
      />
      <p className="text-base leading-6 text-gray-600">{option.label}</p>
    </div>
  );
};

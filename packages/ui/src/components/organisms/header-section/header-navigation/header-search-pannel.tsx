"use client";
import { Input } from "@amalihomes/ui";
import { FormProvider, SubmitHandler, UseFormReturn } from "react-hook-form";
import { usePreventBodyScroll } from "../../../../hooks/use-prevent-scroll/use-prevent-scroll";

export interface SearchFormValues {
  search: string;
}

export interface SearchPanelProps {
  isVisible: boolean;
  formMethods: UseFormReturn<SearchFormValues>;
  onSubmit: SubmitHandler<SearchFormValues>;
}

export const HeaderSearchPanel = ({ isVisible, formMethods, onSubmit }: SearchPanelProps) => {
  usePreventBodyScroll(isVisible);
  if (!isVisible) return null;

  return (
    <FormProvider {...formMethods}>
      <div
        id="search-bar"
        className="absolute top-full mt-1 left-0 z-50 px-16 md:px-32 w-full flex flex-col py-16 lg:px-64  gap-24 bg-white h-72"
      >
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="w-full flex items-center gap-16 justify-center"
        >
          <Input
            name="search"
            type="search"
            placeholder="Search Products"
            className="h-40 w-full rounded-md"
            groupClassName="w-full"
          />
        </form>
      </div>
    </FormProvider>
  );
};

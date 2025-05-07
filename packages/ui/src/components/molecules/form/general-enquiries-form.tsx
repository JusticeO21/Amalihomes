"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from "../../atoms";
import { InputError } from "../../atoms/input/input-error";
import { toast } from "../toast";
import { generalEnquiriesSchema, GeneralEnquiriesSchemaType } from "./schemas";

interface GeneralEnquiriesFormProps {
  title: string;
  description: string;
  buttonLabel: string;
  inputEmailLabel: string;
  inputEmailPlaceholder: string;
  inputSubjectLabel: string;
  inputSubjectPlaceholder: string;
  inputMessageLabel: string;
  inputMessagePlaceholder: string;
  inputEnquiryTypeLabel: string;
  inputEnquiryTypePlaceholder: string;
  inputEnquiryTypeOptions?: string[];
}

const GeneralEnquiriesForm = ({
  title,
  description,
  buttonLabel,
  inputEmailLabel,
  inputEmailPlaceholder,
  inputMessageLabel,
  inputMessagePlaceholder,
  inputSubjectLabel,
  inputSubjectPlaceholder,
  inputEnquiryTypeLabel,
  inputEnquiryTypePlaceholder,
  inputEnquiryTypeOptions = [],
}: GeneralEnquiriesFormProps) => {
  const form = useForm<GeneralEnquiriesSchemaType>({
    resolver: zodResolver(generalEnquiriesSchema),
    defaultValues: {
      enquiry: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const [selectedEnquiry, setSelectedEnquiry] = useState(form.getValues("enquiry") ?? "");

  const handleSelect = (value: string) => {
    form.setValue("enquiry", value);
    form.clearErrors("enquiry");
    setSelectedEnquiry(value);
  };

  const onSubmit = (data: GeneralEnquiriesSchemaType) => {
    form.reset();
    setSelectedEnquiry(inputEnquiryTypePlaceholder);
    toast.success("Form submitted successfully!");
    return data;
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12"
      >
        <div className="space-y-6 mb-24">
          <Typography
            variant="h2"
            className="!text-h3-sm text-gray-950 leading-40 font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="p"
            className="!text-16 text-gray-600 font-normal leading-26"
          >
            {description}
          </Typography>
        </div>

        <div>
          <Select
            label={inputEnquiryTypeLabel}
            className="w-full mb-4 p-0 text-16 text-gray-950"
            onChange={(value) => handleSelect(value)}
            defaultValue={selectedEnquiry}
          >
            <SelectTrigger className="text-18 text-gray-400">
              <SelectValue placeholder={inputEnquiryTypePlaceholder} />
            </SelectTrigger>
            <SelectContent className="text-18 p-0 overflow-hidden">
              {inputEnquiryTypeOptions.map((option) => (
                <SelectItem
                  key={option}
                  value={option}
                  className="text-gray-600 hover:text-gray-950 hover:bg-brand-50 px-16 py-8 rounded-none"
                >
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {form.formState.errors["enquiry"] && (
          <InputError
            name="enquiry"
            message={form.formState.errors["enquiry"].message ?? ""}
          />
        )}
        <Input
          name="email"
          type="email"
          label={inputEmailLabel}
          placeholder={inputEmailPlaceholder}
          className="w-full"
        />
        <Input
          name="subject"
          label={inputSubjectLabel}
          placeholder={inputSubjectPlaceholder}
          className="w-full"
        />
        <Input
          name="message"
          type="textarea"
          label={inputMessageLabel}
          placeholder={inputMessagePlaceholder}
          className="w-full h-[173px]"
        />
        <Button className="w-full justify-center px-24 py-12">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};
export default GeneralEnquiriesForm;

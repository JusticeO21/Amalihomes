"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, Typography } from "../../atoms";
import { productEnquiriesSchema, ProductEnquiriesSchemaType } from "./schemas";
import { toast } from "../toast";

interface ProductEnquiriesFormProps {
  title: string;
  description: string;
  buttonLabel: string;
  inputEmailLabel: string;
  inputEmailPlaceholder: string;
  inputSubjectLabel: string;
  inputSubjectPlaceholder: string;
  inputMessageLabel: string;
  inputMessagePlaceholder: string;
  inputProductLabel: string;
  inputProductPlaceholder: string;
}

const ProductEnquiriesForm = ({
  title,
  description,
  buttonLabel,
  inputEmailLabel,
  inputEmailPlaceholder,
  inputMessageLabel,
  inputMessagePlaceholder,
  inputSubjectLabel,
  inputSubjectPlaceholder,
  inputProductLabel,
  inputProductPlaceholder,
}: ProductEnquiriesFormProps) => {
  const form = useForm<ProductEnquiriesSchemaType>({
    resolver: zodResolver(productEnquiriesSchema),
    defaultValues: {
      product: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ProductEnquiriesSchemaType) => {
    toast.success("Form submitted successfully!");
    form.reset();
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
            className="!text-18 text-gray-600 font-normal leading-26"
          >
            {description}
          </Typography>
        </div>

        <Input
          name="product"
          label={inputProductLabel}
          placeholder={inputProductPlaceholder}
          className="w-full"
        />
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
          className="w-full"
        />
        <Button className="w-full justify-center px-24 py-12">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};

export default ProductEnquiriesForm;

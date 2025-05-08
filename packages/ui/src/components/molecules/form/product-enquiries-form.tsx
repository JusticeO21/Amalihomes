"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from "../../atoms";
import { InputError } from "../../atoms/input/input-error";
import { toast } from "../toast";
import { productEnquiriesSchema, ProductEnquiriesSchemaType } from "./schemas";

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
  inputProducts: { id: string; imageUrl: string; name: string; imageAlt: string; price: string }[];
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
  inputProducts,
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

  const {
    getValues,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = form;
  const [product, setProduct] = useState<string>(getValues("product"));
  const handleProductChange = (value: string) => {
    setProduct(value);
    setValue("product", value);
    clearErrors("product");
  };

  const onSubmit = (data: ProductEnquiriesSchemaType) => {
    reset();
    setProduct(inputProductPlaceholder);
    toast.success("Form submitted successfully!");
    return data;
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-12"
        noValidate
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

        <div>
          <Select
            hasSearch
            defaultValue={product}
            label={inputProductLabel}
            onChange={(value) => handleProductChange(value)}
            className="w-full mb-4 p-0 text-gray-950 font-lato"
          >
            <SelectTrigger className={errors["product"] ? "border-red-500" : ""}>
              <SelectValue
                placeholder={inputProductPlaceholder}
                className="text-18 leading-26"
              />
            </SelectTrigger>
            <SelectContent>
              {inputProducts.map((product) => (
                <SelectItem
                  key={product.id}
                  value={product.name}
                  className="font-bold"
                >
                  <div className="flex items-center gap-16">
                    <Image
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      width={72}
                      height={72}
                      priority
                      className="w-72 h-72 rounded-sm object-contain"
                    />
                    <div className="space-y-[7px]">
                      <p className="text-18 text-gray-600 leading-26">{product.name}</p>
                      <p className="text-18 text-gray-950 leading-26">{product.price}</p>
                    </div>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {errors["product"] && (
          <InputError
            name="product"
            message={errors["product"].message ?? ""}
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
          className="w-full"
        />
        <Button className="w-full justify-center px-24 py-12">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};

export default ProductEnquiriesForm;

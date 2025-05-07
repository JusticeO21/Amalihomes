"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Button, Input, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Typography } from "../../atoms";
import { toast } from "../toast";
import { orderEnquiriesSchema, OrderEnquiriesSchemaType } from "./schemas";
import { useState } from "react";
import { InputError } from "../../atoms/input/input-error";

interface OrderEnquiriesFormProps {
  title: string;
  description: string;
  buttonLabel: string;
  inputEmailLabel: string;
  inputEmailPlaceholder: string;
  inputSubjectLabel: string;
  inputSubjectPlaceholder: string;
  inputMessageLabel: string;
  inputMessagePlaceholder: string;
  inputOrderIDLabel: string;
  inputOrderIDPlaceholder: string;
  inputOrderIDs: { id: string; price: string}[]
}

const OrderEnquiriesForm = ({
  title,
  description,
  buttonLabel,
  inputEmailLabel,
  inputEmailPlaceholder,
  inputMessageLabel,
  inputMessagePlaceholder,
  inputSubjectLabel,
  inputSubjectPlaceholder,
  inputOrderIDLabel,
  inputOrderIDPlaceholder,
  inputOrderIDs,
}: OrderEnquiriesFormProps) => {
  const form = useForm<OrderEnquiriesSchemaType>({
    resolver: zodResolver(orderEnquiriesSchema),
    defaultValues: {
      orderID: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const {getValues, setValue, clearErrors, reset, formState: {errors}} = form;
  const [orderID, setOrderID] = useState<string>(getValues("orderID"));
  const handleOrderIDChange = (value: string) => {
    setOrderID(value);
    setValue("orderID", value);
    clearErrors("orderID");
  }

  const onSubmit = (data: OrderEnquiriesSchemaType) => {
    reset();
    setOrderID(inputOrderIDPlaceholder)
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
            className="!text-18 text-gray-600 font-normal leading-26"
          >
            {description}
          </Typography>
        </div>

        <div>
          <Select
            hasSearch
            defaultValue={orderID}
            label={inputOrderIDLabel}
            onChange={(value) => handleOrderIDChange(value)}
            className="w-full mb-4 p-0 text-gray-950 font-lato"
          >
            <SelectTrigger className={errors["orderID"] ? "border-red-500" : ""}>
              <SelectValue placeholder={inputOrderIDPlaceholder} className="text-18 leading-26" />
            </SelectTrigger>
            <SelectContent>
              {
                inputOrderIDs.map((orderID) => (
                  <SelectItem key={orderID.id} value={orderID.id} className="font-bold">
                    <div>
                    <p className="text-18 text-gray-950 leading-26">{orderID.id}</p>
                    <p className="text-16 text-gray-600 leading-24">{orderID.price}</p>
                    </div>
                  </SelectItem>
                ))
              }
            </SelectContent>
          </Select>
        </div>
        {errors["orderID"] && (
          <InputError
            name="orderID"
            message={errors["orderID"].message ?? ""}
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
          className="w-full h-[122px]"
        />
        <Button className="w-full justify-center px-24 py-12">{buttonLabel}</Button>
      </form>
    </FormProvider>
  );
};

export default OrderEnquiriesForm;

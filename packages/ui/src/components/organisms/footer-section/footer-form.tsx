"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { cn } from "../../../lib/utils";
import { Button, Input, Typography } from "../../atoms";
import { toast } from "../../molecules";
import { FooterFormProps } from "./footer.types";

export const FooterForm = ({
  buttonText,
  inputPlaceholder,
  privacyLink,
  description,
  className,
  errorMessages,
}: FooterFormProps) => {
  const schema = z.object({
    email: z
      .string()
      .nonempty({ message: errorMessages?.required ?? "" })
      .email({ message: errorMessages?.invalid ?? "" }),
  });

  type formType = z.infer<typeof schema>;
  const form = useForm({ resolver: zodResolver(schema) });

  const handleSubmit = (val: formType) => {
    toast.success(`Newsletter subscription successful \n ${val.email}`);
    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={cn(
          "mt-8 flex flex-col items-center justify-center md:items-start md:justify-start gap-12 text-14",
          className,
        )}
      >
        <div className="flex flex-col lg:flex-row w-full gap-12 items-center justify-center md:items-start md:justify-start text-14">
          <Input
            name="email"
            area-label="email"
            placeholder={inputPlaceholder}
            inputClassName={`px-12 border-[1.5px] rounded-md flex-1 w-361 md:w-350 lg:w-357 placeholder:text-white text-white h-24`}
            className={`h-48`}
          />
          <Button
            type="submit"
            className="bg-white hover:bg-whites py-12 px-124 lg:w-118 h-48 flex items-center justify-center md:w-350 w-361 focus:bg-white hover:bg-gray-200"
          >
            <Typography
              weight="bold"
              size={"sm"}
              className="text-Neutral-700"
            >
              {buttonText}
            </Typography>
          </Button>
        </div>
        <Typography
          size="xs"
          className="text-white flex gap-4 mt-2"
        >
          {description}
          <Link
            href={privacyLink.href}
            className="underline text-12 hover:text-gray-300 hover:no-underline"
          >
            {privacyLink.label}
          </Link>
        </Typography>
      </form>
    </FormProvider>
  );
};

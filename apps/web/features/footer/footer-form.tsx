"use client";
import { Button } from "@amalihomes/ui/components/button";
import { Input } from "@amalihomes/ui/components/input";
import { Typography } from "@amalihomes/ui/components/typography";
import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";

export const FooterForm = () => {
  const form = useForm<{ email: string }>({
    defaultValues: { email: "" },
  });
  return (
    <FormProvider {...form}>
      <form className="mt-8 flex flex-col items-center justify-center  md:items-start md:justify-start gap-12 text-14">
        <div className="flex flex-col lg:flex-row  w-full gap-12 items-center justify-center  md:items-start md:justify-start  text-14">
          <Input
            type="email"
            name="email"
            validationRules={{
              required: "required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            }}
            placeholder="Enter your email"
            className="p-12 border-[1.5px] !text-16 border-white rounded-md text-body roboto flex-1 w-361 md:w-350 lg:w-357 h-48"
            inputClassName="placeholder:text-white text-white"
          />
          <Button className="bg-white hover:bg-whites py-12 px-24 lg:w-118 h-48 flex items-center justify-center md:w-350 w-361">
            <Typography
              weight="bold"
              size={"sm"}
              className="text-Neutral-700"
            >
              Subscribe
            </Typography>
          </Button>
        </div>
        <Typography
          size="xs"
          className="text-white flex gap-4"
        >
          By subscribing you agree to with our
          <Link
            href="/privacy-policy"
            className="underline text-12"
          >
            Privacy Policy
          </Link>
        </Typography>
      </form>
    </FormProvider>
  );
};

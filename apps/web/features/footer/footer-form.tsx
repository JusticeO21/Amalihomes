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
      <form className="mt-8 flex flex-col items-center justify-center lg:flex-row md:items-start md:justify-start gap-12 text-14">
        <div className="flex flex-col w-full gap-12 items-center justify-center  md:items-start md:justify-start  text-14">
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
            className="p-12 border border-white rounded-md text-body roboto text-white flex-1 w-[357px]"
            inputClassName="placeholder:text-white"
          />
          <Typography
            size="xs"
            className="text-white flex gap-4"
          >
            By subscribing you agree to with our
            <Link
              href="/privacy-policy"
              className="underline"
            >
              Privacy Policy
            </Link>
            .
          </Typography>
        </div>
        <Button className="bg-white hover:bg-whites py-12 px-24 w-full lg:w-min max-w-357 flex items-center justify-center">
          <Typography
            colors={"text-grey-text-strong"}
            weight="bold"
            size={"sm"}
          >
            Subscribe
          </Typography>
        </Button>
      </form>
    </FormProvider>
  );
};

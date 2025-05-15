"use client";

import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Checkbox, Input } from "../../atoms";
import { registerSchema, RegisterSchemaType } from "./schemas";
import { InputError } from "../../atoms/input/input-error";
import { Spinner } from "../../atoms/loader";

interface RegisterFormProps {
  register: (data: RegisterSchemaType) => void;
  isLoading?: boolean;
}

const RegisterForm = ({ register, isLoading }: RegisterFormProps) => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const {
    setValue,
    getValues,
    formState: { errors },
    clearErrors,
  } = form;

  const [terms, setTerms] = useState(getValues("terms"));

  const handleTermsChange = (value: boolean) => {
    setValue("terms", value);
    setTerms(value);

    if (value) {
      clearErrors("terms");
    }
  };

  const onSubmit = (data: RegisterSchemaType) => {
    register(data);
  };

  return (
    <div className="font-lato mt-[66px] space-y-24 md:w-[491px] md:mx-auto lg:mt-0 lg:w-fit lg:ml-64">
      {isLoading && (
        <div className="fixed left-0 top-0 h-full w-full bg-black/30 flex justify-center items-center z-50">
          <Spinner />
        </div>
      )}
      <p className="text-center lg:text-left text-brand text-16 font-bold p-[10px]">
        Amali<span className="text-gray-600 font-normal">Homes</span>
      </p>

      <div className="space-y-16 text-center lg:text-left">
        <h3 className="text-[32px] md:text-40 lg:text-64 font-bold leading-40 md:leading-48 lg:leading-[74px] text-gray-950">
          Create an Account.
        </h3>

        <p className="text-16 md:text-18 font-normal leading-24 md:leading-26 text-gray-600">
          Join us to enjoy personalized features.
        </p>
      </div>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-40"
          noValidate
        >
          <div className="space-y-16">
            <Input
              name="fullName"
              type="text"
              label="Full Name"
              placeholder="Randy Green"
              className="w-full"
              variant={isLoading ? "disabled" : "default"}
            />
            <Input
              name="email"
              type="email"
              label="Email"
              placeholder="randy.green@gmail.com"
              className="w-full"
              variant={isLoading ? "disabled" : "default"}
            />
            <Input
              name="password"
              type="password"
              label="Password"
              placeholder="********"
              className="w-full"
              variant={isLoading ? "disabled" : "default"}
            />
            <Input
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              placeholder="********"
              className="w-full"
              variant={isLoading ? "disabled" : "default"}
            />
            <div>
              <label
                htmlFor="terms"
                className="text-gray-750 text-14 leading-[22px] flex gap-8"
              >
                <Checkbox
                  disabled={isLoading}
                  id="terms"
                  isChecked={terms}
                  onChange={(value) => handleTermsChange(value)}
                  ariaLabel="terms and conditions checkbox"
                  className={`border-gray-600 rounded-[5px] w-[22px] h-[22px] ${errors["terms"] ? "border-red-500" : ""}`}
                />
                <span>
                  I agree to the{" "}
                  <Link
                    href="/terms"
                    className="text-brand underline"
                  >
                    Terms & Conditions
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="text-brand underline"
                  >
                    Privacy Policy
                  </Link>
                </span>
              </label>
            </div>
            {errors["terms"] && (
              <InputError
                name="terms"
                message={errors["terms"].message ?? ""}
              />
            )}
          </div>
          <div className="text-center space-y-8">
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full justify-center font-bold leading-24 px-24 py-12"
            >
              Create an account
            </Button>
            <span className="text-16 leading-24 text-gray-750 w-full">
              Already have an account?
              <Link
                href="/login"
                className="text-brand underline ml-8"
              >
                Login
              </Link>
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;

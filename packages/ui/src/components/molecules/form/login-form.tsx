"use client";

import Link from "next/link";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../atoms";
import { loginSchema, LoginSchemaType } from "./schemas";
import { Spinner } from "../../atoms";

interface LoginFormProps {
  login: (data: LoginSchemaType) => void;
  isLoading?: boolean;
}

const LoginForm = ({ login, isLoading }: LoginFormProps) => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginSchemaType) => {
    login(data);
  };

  return (
    <div className="font-lato mt-[66px] space-y-24 md:w-[491px] md:mx-auto lg:mt-0 lg:w-[545px] lg:ml-64">
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
          Login
        </h3>

        <p className="text-16 md:text-18 font-normal leading-24 md:leading-26 text-gray-600">
          Welcome back! Please enter your details to continue.
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
            <Link
              href="/forgot-password"
              className="text-16 leading-24 text-brand underline"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="text-center space-y-8">
            <Button
              type="submit"
              className="w-full justify-center font-bold leading-24 px-24 py-12"
              disabled={isLoading}
            >
              Login
            </Button>
            <span className="text-16 leading-24 text-gray-750 w-full">
              Don&apos;t have an account yet?
              <Link
                href="/register"
                className="text-brand underline ml-8"
              >
                Create an account
              </Link>
            </span>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;

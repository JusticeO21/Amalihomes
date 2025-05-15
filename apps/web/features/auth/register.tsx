"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { RegisterForm, toast } from "@amalihomes/ui";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter();

  const register = (data: {
    email: string;
    password: string;
    fullName: string;
    confirmPassword: string;
    terms: boolean;
  }) => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Register successfully");
      setIsLoading(false);
      navigate.push("/");
    }, 2000);
    return data;
  };
  return (
    <div>
      <RegisterForm
        register={register}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Register;

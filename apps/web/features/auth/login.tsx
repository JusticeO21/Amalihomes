"use client";
import { LoginForm, toast } from "@amalihomes/ui";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useRouter();

  const login = (data: { email: string; password: string }) => {
    setIsLoading(true);
    setTimeout(() => {
      toast.success("Login successfully");
      setIsLoading(false);
      navigate.push("/");
    }, 2000);
    return data;
  };
  return (
    <div>
      <LoginForm
        login={login}
        isLoading={isLoading}
      />
    </div>
  );
};

export default Login;

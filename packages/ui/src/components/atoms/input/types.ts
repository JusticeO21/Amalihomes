import { RegisterOptions } from "react-hook-form";

export type InputProps = {
  type?: "text" | "password" | "email" | "search" | "tel" | "textarea" | "number";
  name: string;
  label?: string;
  placeholder?: string;
  validationRules?: RegisterOptions;
  className?: string;
  inputClassName?: string;
  groupClassName?: string;
};

export type PasswordToggleButtonProps = {
  showPassword: boolean;
  handleTogglePassword: () => void;
};

export type InputErrorProps = {
  name: string;
  message: string;
};

export type InputLabelProps = {
  name: string;
  label: string;
  variant: string | undefined | null;
};

export type InputNumberProps = {
  name: string;
};

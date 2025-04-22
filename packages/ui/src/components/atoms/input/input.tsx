"use client";
import { cva, VariantProps } from "class-variance-authority";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../../../lib/utils";
import { IconSearch } from "../../icons";
import { InputError } from "./input-error";
import { InputLabel } from "./input-label";
import { InputNumber } from "./input-number";
import { PasswordToggleButton } from "./password-toggle-button";
import { InputProps } from "./types";

const inputContainerVariant = cva(
  "flex items-center gap-4 border border-Grey-fill rounded-sm h-[58px] w-[346px] py-16 px-12 group-focus-within:border-brand-text",
  {
    variants: {
      variant: {
        default: "",
        disabled: "text-Grey-stroke-weak border-Grey-stroke-weak cursor-not-allowed",
      },
    },
  },
);

const inputVariant = cva(
  "border-none outline-none w-full placeholder:text-Grey-stroke-weaker text-Neutral-900 disabled:cursor-not-allowed",
);

type InputContainerType = VariantProps<typeof inputContainerVariant>;

const Input = ({
  type = "text",
  name,
  label,
  placeholder,
  validationRules,
  className,
  inputClassName,
  groupClassName,
  variant,
}: InputProps & InputContainerType) => {
  const formContext = useFormContext();

  const { register = () => ({}), formState: { errors = {} } = {} } = formContext ?? {};
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const getInputFields = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={name.toLocaleLowerCase().replaceAll(" ", "-")}
          placeholder={placeholder}
          disabled={variant === "disabled"}
          className={cn(inputVariant(), inputClassName, "resize-none h-full")}
          {...register(name, validationRules)}
        />
      );
    }

    if (type === "number") {
      return <InputNumber name={name} />;
    }

    return (
      <input
        id={name.toLocaleLowerCase().replace(" ", "-")}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        disabled={variant === "disabled"}
        className={cn(inputVariant(), inputClassName)}
        {...register(name, validationRules)}
      />
    );
  };

  return (
    <div className={cn("group flex flex-col gap-4", groupClassName)}>
      {label && (
        <InputLabel
          name={name}
          label={label}
          variant={variant}
        />
      )}

      <div
        className={cn(
          inputContainerVariant({ variant }),
          type === "textarea" && "w-full h-[233px]",
          type === "number" && "w-[113px] p-4 gap-0 justify-between",
          className,
        )}
      >
        {type === "search" && (
          <IconSearch
            width={24}
            height={24}
            className="text-Grey-stroke-weaker"
          />
        )}
        {getInputFields()}
        {type === "password" && (
          <PasswordToggleButton
            handleTogglePassword={handleTogglePassword}
            showPassword={showPassword}
          />
        )}
      </div>

      {errors[name] && (
        <InputError
          name={name}
          message={errors[name].message as string}
        />
      )}
    </div>
  );
};

export default Input;

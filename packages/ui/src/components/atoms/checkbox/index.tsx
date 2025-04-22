"use client";

import { useEffect, useState } from "react";
import { IconChecked } from "../../icons";
import { cn } from "../../../lib/utils";
import type { InputHTMLAttributes } from "react";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange" | "checked"> {
  isChecked?: boolean;
  onChange?: (isChecked: boolean) => void;
  className?: string;
  ariaLabel?: string;
  checkIconSize?: number;
  checkIconColor?: string;
}

export const Checkbox = ({
  isChecked,
  onChange,
  className,
  ariaLabel = "checkbox",
  checkIconSize = 16,
  checkIconColor = "#ffffff",
  disabled,
  ...rest
}: CheckboxProps) => {
  const isControlled = isChecked !== undefined;
  const [internalChecked, setInternalChecked] = useState(isChecked ?? false);

  useEffect(() => {
    if (isControlled) {
      setInternalChecked(isChecked!);
    }
  }, [isChecked, isControlled]);

  const handleChange = () => {
    if (disabled) return;
    const newChecked = !internalChecked;

    if (!isControlled) {
      setInternalChecked(newChecked);
    }

    onChange?.(newChecked);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.key === " " || e.key === "Enter") && !disabled) {
      e.preventDefault();
      handleChange();
    }
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        className="w-full h-full opacity-0 absolute z-50"
        checked={internalChecked}
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden="true"
        disabled={disabled}
        {...rest}
      />
      <div
        role="checkbox"
        aria-checked={internalChecked}
        tabIndex={disabled ? -1 : 0}
        aria-label={ariaLabel}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        aria-disabled={disabled}
        className={cn(
          "h-24 w-24 rounded-sm border border-brand-600 flex items-center justify-center cursor-pointer",
          internalChecked && "bg-brand-600",
          disabled && "opacity-50 cursor-not-allowed",
          className,
        )}
      >
        {internalChecked && (
          <IconChecked
            width={checkIconSize}
            height={checkIconSize}
            color={checkIconColor}
          />
        )}
      </div>
    </div>
  );
};

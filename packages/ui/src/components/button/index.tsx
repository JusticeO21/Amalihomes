import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

const buttonVariants = cva("rounded-sm text-white py-8 px-8 text-wrap flex items-center justify-between gap-8", {
  variants: {
    variant: {
      default:
        "bg-brand shadow-sm hover:bg-brand-dark focus:bg-brand-darker text-white disabled:bg-brand-fill disabled:text-brand-stroke-weak",
      primary:
        "bg-brand shadow-sm text-white hover:bg-brand-dark focus:bg-bg-brand-darker disabled:bg-brand-fill disabled:text-brand-stroke-weak",
      secondary:
        "border border-brand  text-brand hover:text-brand-light hover:border-brand-dark focus:text-brand-dark focus:border-brand-darker disabled:bg-brand-fill disabled:border-brand-fill disabled:text-brand-stroke-weak",
    },
    size: {
      default: "px-8 py-8",
      sm: "w-[40px] h-[40px] px-8 py-8 text-xs",
      lg: "px-16 w-[153px]",
      md: "px-12 w-[121px]",
      icon: "w-48 h-48",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, size, leadingIcon, trailingIcon, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };

import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import Link from "next/link";

const buttonVariants = cva(
  "rounded-sm text-white py-8 px-8 text-wrap flex items-center justify-between gap-8 cursor-pointer",
  {
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
        sm: "size-40 px-8 py-8 text-xs",
        lg: "px-16 w-153",
        md: "px-12 w-121",
        icon: "size-48",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  href?: string; // Optional href prop to make it a link
}

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, children, size, leadingIcon, trailingIcon, href, ...props }, ref) => {
    if (href) {
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size }), className)}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {leadingIcon}
          {children}
          {trailingIcon}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref as React.Ref<HTMLButtonElement>}
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

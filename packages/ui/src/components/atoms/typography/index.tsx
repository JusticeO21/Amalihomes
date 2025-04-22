import { cva, type VariantProps } from "class-variance-authority";
import React, { JSX } from "react";
import { cn } from "../../../lib/utils";

export const colorClasses = {
  "text-brand": "text-brand",
  "text-brand-darker": "text-brand-darker",
  "text-brand-dark": "text-brand-dark",
  "text-brand-fill": "text-brand-fill",
  "text-brand-stroke-weak": "text-brand-stroke-weak",
  "text-brand-stroke-strong": "text-brand-stroke-strong",
  "text-brand-text": "text-brand-text",
  "text-info-fill": "text-info-fill",
  "text-info-stroke-weak": "text-info-stroke-weak",
  "text-info-stroke-strong": "text-info-stroke-strong",
  "text-info-text": "text-info-text",
  "text-Amber-fill": "text-Amber-fill",
  "text-Amber-stroke-weak": "text-Amber-stroke-weak",
  "text-Amber-stroke-strong": "text-Amber-stroke-strong",
  "text-Amber-text": "text-Amber-text",
  "text-grey-fill-weaker": "text-Grey-fill-weaker",
  "text-grey-fill": "text-Grey-fill",
  "text-grey-stroke-weak": "text-Grey-stroke-weak",
  "text-grey-stroke-strong": "text-Grey-stroke-strong",
  "text-grey-text-weak": "text-Grey-text-weak",
  "text-grey-text-strong": "text-Grey-text-strong",
  "text-Red-fill": "text-Red-fill",
  "text-Red-stroke-weak": "text-Red-stroke-weak",
  "text-Red-stroke-strong": "text-Red-stroke-strong",
  "text-Red-text": "text-Red-text",
  "text-Green-fill": "text-Green-fill",
  "text-Green-stroke-weak": "text-Green-stroke-weak",
  "text-Green-stroke-strong": "text-Green-stroke-strong",
  "text-Green-text": "text-Green-text",
};

const sizesTypes = {
  xs: "text-sm",
  sm: "text-[1rem]",
  base: "text-[1.5rem]",
  lg: "text-h5-lg",
  xl: "text-h4-lg",
  "text-2xl": "text-[3rem]",
  "text-3xl": "text-[3.5rem]",
  "text-4xl": "text-[4rem]",
};

export type TypographyElement =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "blockquote"
  | "ul"
  | "ol"
  | "span"
  | "div";

export type TypographySize = "xs" | "sm" | "base" | "lg" | "xl" | "text-2xl" | "text-3xl" | "text-4xl";

export type TypographyWeight = "normal" | "medium" | "semibold" | "bold";
const typographyVariants = cva("text-grey-text-strong font-lato", {
  variants: {
    size: sizesTypes,
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    colors: colorClasses,
  },
  defaultVariants: {
    size: "lg",
    weight: "normal",
    colors: "text-grey-text-strong",
  },
});

export type TypographyVariants = VariantProps<typeof typographyVariants>;
export interface TypographyProps extends React.HTMLAttributes<HTMLElement>, TypographyVariants {
  asChild?: boolean;
  as?: TypographyElement | keyof JSX.IntrinsicElements;
  variant?: TypographyElement;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ size, weight, variant, as, children, colors, className, ...props }, ref) => {
    const Component: React.ElementType = as ?? (variant as React.ElementType) ?? "p";

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ size, weight, colors }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Typography.displayName = "Typography";

export { Typography, typographyVariants };

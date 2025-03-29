import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const containerVariants = cva("w-full mx-auto", {
  variants: {
    maxWidth: {
      sm: "max-w-sm",
      md: "max-w-md",
      lg: "max-w-lg",
      xl: "max-w-xl",
      "2xl": "max-w-2xl",
      "3xl": "max-w-3xl",
      "4xl": "max-w-4xl",
      "5xl": "max-w-5xl",
      "6xl": "max-w-6xl",
      "7xl": "max-w-[1440px]",
      full: "max-w-full",
      none: "",
    },
    paddingX: {
      0: "px-0",
      1: "px-1",
      2: "px-2",
      3: "px-3",
      4: "px-4",
      5: "px-5",
      6: "px-6",
      7: "px-7",
      8: "px-8",
      9: "px-9",
      10: "px-10",
      11: "px-11",
      12: "px-12",
      13: "px-13",
      14: "px-14",
      15: "px-15",
      default: "px-[16px] sm:px-[32px] md:px-[64px] ",
    },
    paddingY: {
      0: "py-0",
      1: "py-1",
      2: "py-2",
      3: "py-3",
      4: "py-4",
      5: "py-5",
      6: "py-6",
      7: "py-7",
      8: "py-8",
      9: "py-9",
      10: "py-10",
      11: "py-11",
      12: "py-12",
      13: "py-13",
      14: "py-14",
      15: "py-15",
      default: "py-[40px] sm:py-[48px] md:py-[64px] ",
    },
    marginY: {
      0: "my-0",
      1: "my-1",
      2: "my-2",
      3: "my-3",
      4: "my-4",
      5: "my-5",
      6: "my-6",
      7: "my-7",
      8: "my-8",
      9: "my-9",
      10: "my-10",
      11: "my-11",
      12: "my-12",
      13: "my-13",
      14: "my-14",
      15: "my-15",
    },
    rounded: {
      none: "rounded-none",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full",
    },
    border: {
      none: "",
      thin: "border",
      normal: "border-2",
      thick: "border-4",
    },
    shadow: {
      none: "shadow-none",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      "2xl": "shadow-2xl",
    },
    bgColor: {
      white: "bg-white",
      transparent: "bg-transparent",
      gray: "bg-gray-100",
      brand: "bg-brand-fill",
      info: "bg-info-fill",
      amber: "bg-Amber-fill",
      grey: "bg-Grey-fill",
      red: "bg-Red-fill",
      green: "bg-Green-fill",
    },
    borderColor: {
      default: "border-gray-200",
      brand: "border-brand-stroke-weak",
      info: "border-info-stroke-weak",
      amber: "border-Amber-stroke-weak",
      grey: "border-Grey-stroke-weak",
      red: "border-Red-stroke-weak",
      green: "border-Green-stroke-weak",
    },
  },
  defaultVariants: {
    maxWidth: "7xl",
    marginY: 4,
    paddingX: "default",
    paddingY: "default",
    border: "none",
    bgColor: "white",
    borderColor: "default",
  },
});

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof containerVariants> {
  children: React.ReactNode;
}

function Container({
  children,
  maxWidth,
  paddingX,
  paddingY,
  marginY,
  rounded,
  border,
  shadow,
  bgColor,
  borderColor,
  className,
  ...props
}: ContainerProps) {
  const containerClasses = containerVariants({
    maxWidth,
    paddingX,
    paddingY,
    marginY,
    rounded,
    border,
    shadow,
    bgColor,
    borderColor,
  });

  return (
    <div
      className={cn(containerClasses, className)}
      {...props}
    >
      {children}
    </div>
  );
}

export { Container, type ContainerProps };

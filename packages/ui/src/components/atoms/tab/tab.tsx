import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/utils";

const tabVariants = cva(
  "flex gap-12 items-center transition-colors duration-300 rounded-md font-lato py-12 px-24 leading-26 !text-18 min-w-fit",
  {
    variants: {
      iconPosition: {
        right: "flex-row",
        left: "flex-row-reverse",
        bottom: "flex-col justify-center",
        top: "flex-col-reverse justify-center",
      },
    },
    defaultVariants: {
      iconPosition: "right",
    },
  },
);

interface TabProps extends HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof tabVariants> {
  href: string;
  label: string;
  focused?: boolean;
  scroll?: boolean;
  icon?: ReactNode;
}
const Tab = ({
  href,
  label,
  className = "",
  focused = false,
  icon,
  iconPosition,
  scroll = false,
  ...props
}: TabProps) => {
  return (
    <Link
      aria-current={focused ? "page" : undefined}
      id={label}
      href={href}
      scroll={scroll}
      className={cn(
        tabVariants({ iconPosition }),
        focused
          ? "bg-brand-100 text-brand-600 font-bold"
          : "font-normal text-gray-500 bg-white hover:bg-gray-50 hover:text-gray-600",
        className,
      )}
      {...props}
    >
      {label}
      {icon}
    </Link>
  );
};

export default Tab;

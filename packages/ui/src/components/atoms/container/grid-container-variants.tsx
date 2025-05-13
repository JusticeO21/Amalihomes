import { cva } from "class-variance-authority";

export const gridVariants = cva("grid w-full gap-4", {
  variants: {
    columns: {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
    },
    responsive: {
      sm: "sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4",
      md: "md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6",
      lg: "lg:grid-cols-4 xl:grid-cols-6",
      xl: "xl:grid-cols-6",
    },
    gap: {
      sm: "gap-8",
      md: "gap-16",
      lg: "gap-24",
      xl: "gap-30",
    },
  },
  defaultVariants: {
    columns: 1,
    gap: "md",
  },
});

import { cva, type VariantProps } from "class-variance-authority";

export const personCardStyles = cva("relative w-full h-full  overflow-auto", {
  variants: {
    size: {
      sm: "rounded-[8px] lg:max-w-[310px] md:max-w-[373px] max-w-[361px] !h-[348px]",
      md: "max-w-[361px] !h-[448px] md:max-w-[377px]  md:rounded-[9.68px] lg:max-w-[310px] lg:!h-[370px] rounded-[8px]",
      lg: "max-w-[420px] !h-[480px] rounded-[12px]",
    },
    textPosition: {
      top: "items-start",
      center: "items-center",
      bottom: "items-end",
    },
  },
  defaultVariants: {
    size: "sm",
    textPosition: "bottom",
  },
});

export type PersonCardVariants = VariantProps<typeof personCardStyles>;

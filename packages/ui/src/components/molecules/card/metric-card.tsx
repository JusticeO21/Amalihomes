import { cva, type VariantProps } from "class-variance-authority";
import { TextPair } from "@amalihomes/ui";
import { cn } from "../../../lib/utils";

const metricCardVariants = cva("", {
  variants: {
    variant: {
      primary: "bg-primary/10 border border-primary/20",
      secondary: "bg-secondary/10 border border-secondary/20",
      minimal: "bg-transparent border-none",
    },
  },
  defaultVariants: {
    variant: "minimal",
  },
});

export type MetricCardProps = {
  number: string;
  label: string;
  numberClass?: string;
  labelClass?: string;
  className?: string;
  id: string;
  ariaLabel?: string;
} & VariantProps<typeof metricCardVariants>;

export const MetricCard = ({
  number,
  label,
  numberClass,
  labelClass,
  className,
  id,
  ariaLabel = `${number} ${label}`,
  variant,
}: MetricCardProps) => {
  return (
    <div
      className={cn(metricCardVariants({ variant, className }))}
      aria-hidden="true"
    >
      <TextPair
        header={number}
        headerAs="div"
        headerClass={`
           !text-[32px] !leading-40 !font-semibold lg:!text-48 lg:!leading-56
          ${numberClass && numberClass}
        `}
        description={label}
        descriptionAs="div"
        descriptionClass={`!text-body !leading-24  ${labelClass && labelClass}`}
        align="center"
        spacing="xs"
        role="group"
        id={id}
        ariaLabel={ariaLabel}
      />
    </div>
  );
};

MetricCard.displayName = "MetricCard";

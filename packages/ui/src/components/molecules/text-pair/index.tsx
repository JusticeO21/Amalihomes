import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textPairVariants = cva("flex flex-col font-lato", {
  variants: {
    spacing: {
      xs: "gap-[16px]",
      sm: "gap-20",
      md: "gap-24",
      lg: "gap-26",
      xl: "gap-28",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
  },
  defaultVariants: {
    spacing: "md",
    align: "center",
  },
});

export interface TextPairProps extends VariantProps<typeof textPairVariants>, React.HTMLAttributes<HTMLDivElement> {
  header: React.ReactNode | string;
  description?: React.ReactNode;
  headerClass?: string;
  descriptionClass?: string;
  headerAs?: React.ElementType; // e.g., "h1", "h2", "span"
  descriptionAs?: React.ElementType; // e.g., "p", "div", "span"
  ariaLabel?: string;
  id?: string;
  role?: string;
  maxHeaderLength?: number;
  maxDescriptionLength?: number;
}

export const TextPair = forwardRef<HTMLDivElement, TextPairProps>(
  (
    {
      header,
      description,
      spacing,
      align,
      className,
      headerClass,
      descriptionClass,
      headerAs: HeaderTag = "h2",
      descriptionAs: DescriptionTag = "p",
      ariaLabel,
      id = `text-pair-${Math.random().toString(36).slice(2)}`,
      role,
      maxHeaderLength,
      maxDescriptionLength,
      ...props
    },
    ref,
  ) => {
    const truncateText = (text: React.ReactNode | string, maxLength?: number): React.ReactNode => {
      if (!maxLength || typeof text !== "string") return text;

      return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    const truncatedHeader = truncateText(header, maxHeaderLength);
    const truncatedDescription = description ? truncateText(description, maxDescriptionLength) : null;
    return (
      <div
        ref={ref}
        role={role}
        aria-labelledby={id}
        aria-label={ariaLabel}
        className={cn(textPairVariants({ spacing, align, className }))}
        {...props}
      >
        <HeaderTag
          id={id}
          className={`font-semibold text-gray-800 ${headerClass && headerClass}`}
        >
          {truncatedHeader}
        </HeaderTag>
        {description && (
          <DescriptionTag className={`font-body text-gray-700 ${descriptionClass && descriptionClass}`}>
            {truncatedDescription}
          </DescriptionTag>
        )}
      </div>
    );
  },
);

TextPair.displayName = "TextPair";

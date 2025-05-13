import { VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React from "react";
import { gridVariants } from "./grid-container-variants";

interface GridContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof gridVariants> {
  children: React.ReactNode;
  className?: string;
}

export const GridContainer: React.FC<GridContainerProps> = ({
  children,
  columns,
  responsive,
  gap,
  className,
  ...props
}) => {
  return (
    <div
      className={clsx(gridVariants({ columns, responsive, gap }), className)}
      {...props}
    >
      {children}
    </div>
  );
};

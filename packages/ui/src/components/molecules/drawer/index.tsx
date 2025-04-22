"use client";

import { cn } from "../../../lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";
import { usePreventBodyScroll } from "../../../hooks/use-prevent-scroll/use-prevent-scroll";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  labelledBy?: string;
  describedBy?: string;
  shadowClassName?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
  labelledBy,
  describedBy,
  shadowClassName,
}) => {
  usePreventBodyScroll(isOpen);
  if (!isOpen) return null;

  return (
    <div
      className={cn("fixed inset-0 z-50", className)}
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      data-testid="drawer-container"
    >
      <div
        className={cn("fixed inset-0 bg-Gray-drop-shadow transition-opacity", shadowClassName)}
        onClick={onClose}
        role="button"
        tabIndex={0}
        aria-label="Close drawer"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClose();
          }
        }}
        data-testid="drawer-backdrop"
      />
      {children}
    </div>
  );
};

const drawerVariants = cva("absolute bottom-0 z-[1000] gap-4 bg-white p-6 shadow-md transition ease-in-out", {
  variants: {
    side: {
      top: "top-0",
      bottom: "bottom-0",
      left: "left-0 h-full w-3/4 sm:max-w-sm",
      right: "right-0 h-full w-3/4 sm:max-w-sm",
    },
  },
  defaultVariants: {
    side: "right",
  },
});

interface DrawerContentProps extends React.HTMLAttributes<HTMLDivElement> {
  side?: "top" | "bottom" | "left" | "right";
}

const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(
  ({ side = "right", className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(drawerVariants({ side }), className)}
      role="document"
      data-testid="drawer-content"
      {...props}
    >
      {children}
    </div>
  ),
);
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <header
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    data-testid="drawer-header"
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <footer
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    data-testid="drawer-footer"
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn("text-lg font-semibold text-foreground", className)}
    data-testid="drawer-title"
    {...props}
  />
);
DrawerTitle.displayName = "DrawerTitle";

const DrawerDescription = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn("text-sm text-muted-foreground", className)}
    data-testid="drawer-description"
    {...props}
  />
);
DrawerDescription.displayName = "DrawerDescription";

export { Drawer, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle };

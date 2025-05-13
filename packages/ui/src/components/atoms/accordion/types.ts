export interface AccordionContextProps {
  value: string[];
  onValueChange: (value: string) => void;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultValue?: string[];
  type?: "single" | "multiple";
}

export interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export interface AccordionTriggerProps {
  labelAs?: React.ElementType;
  label: string;
  className?: string;
  labelClassName?: string;
}

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

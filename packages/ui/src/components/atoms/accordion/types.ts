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
  label: string;
  className?: string;
}

export interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
}

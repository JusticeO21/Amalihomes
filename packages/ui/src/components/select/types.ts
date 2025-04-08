import { ButtonHTMLAttributes, ReactNode } from "react";

//* Select Context
export type SelectContextType = {
  selected: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  handleSelect: (value: string) => void;
  search: string;
  handleSearch: (value: string) => void;
  hasSearch: boolean;
  delay: number;
};

//* Select Props
export type SelectProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  hasSearch?: boolean;
  delay?: number;
};

//* Select Trigger Props
export type SelectTriggerProps = {
  children: ReactNode;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

//* Select Item Props
export type SelectItemProps = {
  value: string;
  children: ReactNode;
  className?: string;
};

//* Select Label Props
export type SelectLabelProps = {
  children: ReactNode;
  className?: string;
  htmlFor?:string;
};

//* Select Content Props
export type SelectContentProps = {
  children: ReactNode;
  className?: string;
  hasSearch?: boolean;
};

//* Select Search Props
export type SelectSearchProps = {
  onSearch: (query: string) => void;
};

//* Select Group Props
export type SelectGroupProps = {
  children: ReactNode;
  className?: string;
};

//* Select Select Value Props
export type SelectValueProps = {
  placeholder: string;
  className?: string;
};

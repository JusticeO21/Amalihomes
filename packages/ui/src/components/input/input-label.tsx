import { cn } from "../../lib/utils";
import { InputLabelProps } from "./types";

export const InputLabel = ({ name, label, variant }: InputLabelProps) => {
  return (
    <label
      htmlFor={name.toLocaleLowerCase().replaceAll(" ", "-")}
      className={cn("text-body font-bold text-Grey-text-strong", variant === "disabled" && "text-Grey-stroke-weak")}
    >
      {label}
    </label>
  );
};

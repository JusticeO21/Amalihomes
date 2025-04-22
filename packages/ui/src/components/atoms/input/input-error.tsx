import { CircleX } from "lucide-react";
import { InputErrorProps } from "./types";

export const InputError = ({ name, message }: InputErrorProps) => {
  return (
    <div
      id={`${name}-error`}
      className="flex items-center gap-4 text-Red-text"
      role="alert"
    >
      <CircleX size={16} />
      <span className="text-body">{message}</span>
    </div>
  );
};

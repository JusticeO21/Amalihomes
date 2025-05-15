import { Eye, EyeOff } from "lucide-react";
import { PasswordToggleButtonProps } from "./types";

export const PasswordToggleButton = ({ showPassword, handleTogglePassword }: PasswordToggleButtonProps) => {
  return (
    <button
      className="cursor-pointer text-Grey-stroke-weaker"
      onClick={handleTogglePassword}
      title={showPassword ? "Hide password" : "Show password"}
      aria-label="button to toggle password visibility"
      type="button"
    >
      {!showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
    </button>
  );
};

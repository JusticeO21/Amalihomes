import { ButtonHTMLAttributes, JSX } from "react";
import { IconProps } from "../../icons/icon.types";
import { IconCircleIndicator } from "../../icons/icon-circle-indicator";

export interface LiveChatWidowBottomNavBarItemProps extends ButtonHTMLAttributes<HTMLDivElement> {
  isActive?: boolean;
  toggleActive?: () => void;
  icon: ({ color, size }: IconProps) => JSX.Element;
}

export const LiveChatBottomNavBarItem = ({
  isActive,
  toggleActive,
  icon: Icon,
  ...props
}: LiveChatWidowBottomNavBarItemProps) => {
  return (
    <div
      {...props}
      className="flex flex-col items-center justify-center gap-8 px-8"
      onClick={toggleActive}
    >
      <Icon
        color={isActive ? "#EA690C" : "#FBA03C"}
        size={23}
      />
      <div className={isActive ? "opacity-100" : "opacity-0"}>
        <IconCircleIndicator />
      </div>
    </div>
  );
};

import { IconCancel } from "../../icons";
import { IconBack } from "../../icons/icon-back";

export interface LiveChatWindowHeaderProps {
  isBackBtnVisible?: boolean;
  closeWindow?(): void;
  back?(): void;
}

export const LiveChatWindowHeader = ({ closeWindow, isBackBtnVisible = true, back }: LiveChatWindowHeaderProps) => {
  return (
    <div className="flex justify-between items-end w-full sticky top-0 z-2000">
      {isBackBtnVisible && (
        <button
          className="flex items-center justify-center rounded-full w-40 h-40 bg-brand-50 cursor-pointer self-end"
          onClick={back}
        >
          <IconBack />
        </button>
      )}
      <div></div>
      <button
        className="flex items-center justify-center rounded-full w-40 h-40 bg-brand-50 cursor-pointer "
        onClick={closeWindow}
      >
        <IconCancel
          color="#EA690C"
          size={9}
        />
      </button>
    </div>
  );
};

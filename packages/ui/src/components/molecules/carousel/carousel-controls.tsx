import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../../../lib/utils";
import { CarouselControlsProps } from "./types";

export const CarouselControls = ({
  previousSlide,
  nextSlide,
  disableNextButton,
  disablePrevButton,
  className,
}: CarouselControlsProps) => {
  return (
    <div className={cn("flex items-center gap-8 ml-auto", className)}>
      <button
        onClick={previousSlide}
        className="cursor-pointer p-12 rounded-full bg-Grey-fill-weaker hover:bg-gray-200 disabled:bg-white disabled:cursor-no-drop group"
        aria-label="Previous slide"
        id="previous-button"
        disabled={disablePrevButton}
      >
        <ArrowLeft
          size={15}
          className="text-gray-980 group-disabled:text-gray-200"
        />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer p-12 rounded-full bg-Grey-fill-weaker hover:bg-gray-200 disabled:bg-white disabled:cursor-no-drop group"
        aria-label="Next slide"
        id="next-button"
        disabled={disableNextButton}
      >
        <ArrowRight
          size={15}
          className="text-gray-980 group-disabled:text-gray-200"
        />
      </button>
    </div>
  );
};

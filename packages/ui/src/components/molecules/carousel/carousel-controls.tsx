import { ArrowLeft, ArrowRight } from "lucide-react";
import { CarouselControlsProps } from "./types";
import { cn } from "../../../lib/utils";

export const CarouselControls = ({ previousSlide, nextSlide, className }: CarouselControlsProps) => {
  return (
    <div className={cn("flex items-center gap-8 ml-auto", className)}>
      <button
        onClick={previousSlide}
        className="cursor-pointer p-12 rounded-full bg-Grey-fill-weaker"
        aria-label="Previous slide"
        id="previous-button"
      >
        <ArrowLeft
          size={15}
          className="text-Grey-text-weak"
        />
      </button>
      <button
        onClick={nextSlide}
        className="cursor-pointer p-12 rounded-full bg-Grey-fill-weaker"
        aria-label="Next slide"
        id="next-button"
      >
        <ArrowRight
          size={15}
          className="text-Grey-text-weak"
        />
      </button>
    </div>
  );
};

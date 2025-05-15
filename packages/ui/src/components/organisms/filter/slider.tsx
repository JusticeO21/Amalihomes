
"use client";
import { useState, useEffect } from "react";

interface DualRangeSliderProps {
  min?: number; // Minimum possible value (input attribute)
  max?: number; // Maximum possible value (input attribute)
  step?: number; // Step increment
  scale?: number; // Multiplier for displayed values
  initialMin?: number; // Current minimum selected value
  initialMax?: number; // Current maximum selected value
  showMiddleValue?: boolean;
  rangeClassName?: string;
  onChange?: (values: { min: number; max: number }) => void;
}

export const Slider = ({
  min = 0,
  max = 100,
  step = 1,
  scale = 50,
  initialMin = min,
  initialMax = max,
  showMiddleValue = false,
  rangeClassName = "absolute h-[4px] rounded-full bg-brand-500",
  onChange,
}: DualRangeSliderProps) => {
  // Validate props
  if (min >= max) throw new Error("min must be less than max");
  if (step <= 0) throw new Error("step must be greater than 0");
  if (initialMin < min || initialMin > max) throw new Error("minValue must be between min and max");
  if (initialMax < min || initialMax > max) throw new Error("maxValue must be between min and max");
  if (initialMin > initialMax) throw new Error("minValue must be less than or equal to maxValue");

  const [currentMin, setCurrentMin] = useState(initialMin);
  const [currentMax, setCurrentMax] = useState(initialMax);

  useEffect(() => {
    setCurrentMin(initialMin);
  }, [initialMin]);

  useEffect(() => {
    setCurrentMax(initialMax);
  }, [initialMax]);

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(
      Number(e.target.value),
      currentMax - step, // Don't allow min to exceed max - step
    );
    const roundedValue = Math.max(min, Math.round(value / step) * step);

    setCurrentMin(roundedValue);
    onChange?.({
      min: roundedValue * scale,
      max: currentMax * scale,
    });
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), currentMin + step);
    const roundedValue = Math.min(max, Math.round(value / step) * step);

    setCurrentMax(roundedValue);
    onChange?.({
      min: currentMin * scale,
      max: roundedValue * scale,
    });
  };

  const scaledMin = currentMin * scale;
  const scaledMax = currentMax * scale;
  const scaledMiddle = Math.floor((currentMin + currentMax) / 2) * scale;
  const minPercent = ((currentMin - min) / (max - min)) * 100;
  const maxPercent = ((currentMax - min) / (max - min)) * 100;

  return (
    <div className="w-full">
      <div className="relative w-full h-8 flex items-center">
        {/* Base line */}
        <div className="absolute w-full h-[4px] bg-gray-300 rounded-full" />

        {/* Active range */}
        <div
          className={rangeClassName}
          style={{
            left: `${minPercent}%`,
            width: `${maxPercent - minPercent}%`,
          }}
        />

        {/* Left Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentMin}
          onChange={handleMinChange}
          className="
            absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-10
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-[16px]
            [&::-webkit-slider-thumb]:w-[16px]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-brand-400
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-500
          "
        />

        {/* Right Thumb */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={currentMax}
          onChange={handleMaxChange}
          className="
            absolute w-full h-2 appearance-none bg-transparent pointer-events-none z-20
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:h-[16px]
            [&::-webkit-slider-thumb]:w-[16px]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-brand-400
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:pointer-events-auto
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-500
          "
        />
      </div>

      <div className="flex justify-between mt-[16px] text-sm text-gray-600 px-1">
        <span className="tracking-[0] leading-5">${scaledMin}</span>
        {showMiddleValue && <span className="tracking-[0] leading-5">${scaledMiddle}</span>}
        <span className="tracking-[0] leading-5">${scaledMax}</span>
      </div>
    </div>
  );
};

export default Slider;

"use client";

import { Children, useCallback, useEffect, useState } from "react";
import { cn } from "../../lib/utils";
import { CarouselControls } from "./carousel-controls";
import { ProductCarouselProps } from "./types";

export const ProductCarousel = ({
  children,
  gap = 16,
  autoPlay = false,
  interval = 5000,
  showControls = true,
  className = "",
  itemClassName = "",
  heading = "",
  isCategory = false,
}: ProductCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  const totalItems = children.length;
  const maxIndex = Math.max(totalItems - itemsPerView, 0);

  const updateItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(min-width: 768px)").matches) {
      setItemsPerView(3.5);
    } else if (window.matchMedia("(min-width: 640px)").matches) {
      setItemsPerView(2.5);
    } else if (window.matchMedia("(min-width: 400px)").matches) {
      setItemsPerView(1.5);
    } else {
      setItemsPerView(1);
    }
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1));
  }, [maxIndex]);

  const previousSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex <= 0 ? maxIndex : prevIndex - 1));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, isPaused, nextSlide]);

  const itemWidth = `calc((100% - ${(itemsPerView - 1) * gap}px) / ${itemsPerView})`;

  return (
    <section
      className={cn(`relative m-auto w-full flex flex-col gap-40 overflow-hidden`, className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {showControls && (
        <div className="flex justify-between items-center w-full">
          {heading && (
            <h5 className={`${isCategory ? "text-h6-sm sm:text-h5-sm" : "text-h3-sm"} md:text-h3-md font-bold`}>
              {heading}
            </h5>
          )}
          {totalItems > itemsPerView && (
            <CarouselControls
              previousSlide={previousSlide}
              nextSlide={nextSlide}
            />
          )}
        </div>
      )}

      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          gap: `${gap}px`,
        }}
      >
        {Children.map(children, (child) => (
          <div
            key={child?.toString()}
            className={cn(`flex-shrink-0`, itemClassName)}
            style={{ width: itemWidth }}
          >
            {child}
          </div>
        ))}
      </div>
    </section>
  );
};

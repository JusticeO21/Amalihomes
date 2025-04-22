"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { CarouselControls } from "./carousel-controls";
import { ProductCarouselProps } from "./types";
import { Container } from "../../atoms";

export const ProductCarousel = ({
  children,
  showControls = true,
  className = "",
  heading = "",
  isCategory = false,
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(361);
  const updateItemsPerView = useCallback(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(min-width: 768px)").matches) {
      setScrollAmount(361);
    } else if (window.matchMedia("(min-width: 640px)").matches) {
      setScrollAmount(270);
    } else if (window.matchMedia("(min-width: 400px)").matches) {
      setScrollAmount(203);
    } else {
      setScrollAmount(200);
    }
  }, []);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <Container
      paddingY={0}
      marginY={0}
      className={cn(`relative m-auto w-full flex flex-col gap-40 overflow-hidden`, className)}
    >
      {showControls && (
        <div className="flex justify-between items-center w-full">
          {heading && (
            <h4
              className={`${isCategory ? "!text-18 sm:!text-24 font-bold md:font-semibold" : "!text-h3-sm font-semibold"} md:!text-h3-md`}
            >
              {heading}
            </h4>
          )}
          <CarouselControls
            previousSlide={() => handleScroll("left")}
            nextSlide={() => handleScroll("right")}
          />
        </div>
      )}

      <div
        className="flex gap-16 md:gap-24 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        ref={scrollRef}
      >
        {children}
      </div>
    </Container>
  );
};

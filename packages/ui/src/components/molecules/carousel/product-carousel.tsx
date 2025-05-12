"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../../lib/utils";
import { Container, Typography } from "../../atoms";
import { CarouselControls } from "./carousel-controls";
import { ProductCarouselProps } from "./types";

export const ProductCarousel = ({
  children,
  showControls = true,
  className = "",
  heading = "",
}: ProductCarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollAmount, setScrollAmount] = useState(361);
  const [scrollState, setScrollState] = useState<"start" | "middle" | "all" | "last">("start");

  const checkScrollPosition = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const isAtStart = scrollLeft === 0;
    const isAtEnd = Math.abs(scrollLeft + clientWidth - scrollWidth) <= 1;

    if (clientWidth >= scrollWidth) {
      if (scrollState !== "all") {
        setScrollState("all");
      }
    } else if (isAtEnd) {
      if (scrollState !== "last") {
        setScrollState("last");
      }
    } else if (isAtStart) {
      if (scrollState !== "start") {
        setScrollState("start");
      }
    } else if (scrollState !== "middle") {
      setScrollState("middle");
    }
  }, [scrollState]);

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

    setTimeout(checkScrollPosition, 100);
  }, [checkScrollPosition]);

  useEffect(() => {
    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [updateItemsPerView]);

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (!currentRef) return;

    checkScrollPosition();

    currentRef.addEventListener("scroll", checkScrollPosition);

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [checkScrollPosition]);

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
      className={cn(`relative m-auto w-full flex flex-col gap-16 md:gap-24 overflow-hidden`, className)}
    >
      <div className="flex justify-between items-center w-full text-24 md:text-h3-sm lg:text-40">
        {heading && (
          <Typography
            variant="h4"
            className={`text-gray-950 font-bold `}
          >
            {heading}
          </Typography>
        )}
        {showControls && scrollState !== "all" && (
          <CarouselControls
            previousSlide={() => handleScroll("left")}
            nextSlide={() => handleScroll("right")}
            disableNextButton={scrollState === "last"}
            disablePrevButton={scrollState === "start"}
          />
        )}
      </div>

      <div
        className="flex gap-16 md:gap-24 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        ref={scrollRef}
      >
        {children}
      </div>
    </Container>
  );
};

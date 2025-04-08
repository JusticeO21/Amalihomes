"use client";
import { useCallback, useEffect, useState } from "react";
import { CarouselControls } from "./carousel-controls";
import { HeroCarouselProps } from "./types";

export const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="flex flex-col justify-center items-center gap-24 max-w-[724px] md:w-full h-[290px] sm:h-[559px]">
      <div className="flex gap-24 w-full h-[244px] sm:h-[491px]">
        <div className="relative w-full rounded-t-[724px] flex items-center overflow-hidden bg-Grey-fill-weaker ">
          {[...images].reverse().map((image) => (
            <div
              key={image.imageAlt}
              className="relative flex items-center h-full w-full flex-shrink-0 transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img
                src={image.imageUrl}
                alt={image.imageAlt}
                id={`img-${image.imageAlt}`}
                width={600}
                height={400}
                className="w-full h-full object-cover "
              />
            </div>
          ))}
        </div>

        <div className="w-[43px] sm:w-[87px] h-full flex flex-col justify-between overflow-hidden p-4">
          {[...images].splice(0, 3).map((image) => {
            return (
              <div
                key={image.imageAlt}
                className="relative w-full h-[38px] sm:!h-[78px] flex justify-center items-center transition-transform duration-500 ease-in-out "
              >
                <div className="absolute w-full h-[50%] bottom-0 rounded-b-[95px] bg-Grey-fill-weaker"></div>
                <img
                  src={image.imageUrl}
                  alt={`side ${image.imageAlt}`}
                  width={30}
                  height={30}
                  id={`side-img-${image.imageAlt}`}
                  className="w-full object-cover z-10"
                />
              </div>
            );
          })}
        </div>
      </div>

      <CarouselControls
        nextSlide={nextSlide}
        previousSlide={prevSlide}
        className="ml-0"
      />
    </div>
  );
};

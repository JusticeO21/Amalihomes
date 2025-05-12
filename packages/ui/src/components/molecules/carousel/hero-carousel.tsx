"use client";
import { useEffect, useState, useCallback } from "react";
import { CarouselControls } from "./carousel-controls";
import { HeroCarouselProps } from "./types";
import { Image } from "../../atoms";

export const HeroCarousel = ({ images }: HeroCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      className="flex flex-col items-center gap-24 max-w-[724px] md:w-full max-h-[290px] md:max-h-[559px]"
      aria-live="polite"
    >
      <div className="flex gap-24 w-full max-h-[244px] md:max-h-[491px]">
        <div className="relative w-full rounded-t-[724px] overflow-hidden bg-Grey-fill-weaker flex justify-between items-center ">
          {images?.map((image) => (
            <div
              key={image.imageAlt}
              className="relative h-full w-full rounded-t-[724px] flex-shrink-0 transition-transform duration-1000 ease-in-out flex justify-center items-end"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <Image
                src={image.imageUrl}
                alt={image.imageAlt}
                id={`img-${image.imageAlt}`}
                width={600}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        <div className="w-[43px] md:w-[87px] flex flex-col justify-between overflow-hidden p-4">
          {[...images].splice(0, 3).map((image) => {
            return (
              <div
                key={image.imageAlt}
                className={`relative w-full h-[38px] md:!h-[78px] flex justify-center items-center transition-all duration-500 ease-in-out ${currentIndex === images.indexOf(image) ? "" : "opacity-50"}`}
                aria-label={`slide ${images.indexOf(image) + 1}`}
                aria-current={currentIndex === images.indexOf(image) ? "true" : "false"}
              >
                <button
                  type="button"
                  onClick={() => goToSlide(images.indexOf(image))}
                  title={`Go to slide ${images.indexOf(image) + 1}`}
                  className={`absolute z-10 w-full h-full cursor-pointer`}
                  aria-label={image.imageAlt}
                ></button>
                <div className="absolute w-full h-[50%] bottom-0 rounded-b-[95px] bg-Grey-fill-weaker"></div>
                <img
                  src={image.imageUrl}
                  alt={`thumbnail ${image.imageAlt}`}
                  width={30}
                  height={30}
                  id={`side-img-${image.imageAlt}`}
                  className="w-full object-cover z-1"
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

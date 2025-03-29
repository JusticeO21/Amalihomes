import React from "react";
import Image from "next/image";
import { Container } from "@amalihomes/ui/components/container";

function FlashSale() {
  return (
    <section
      aria-labelledby="flash-sale-heading"
      aria-label="Flash sale promotional section"
    >
      <Container className="grid md:grid-cols-2 gap-0">
        <Container
          paddingY={0}
          paddingX={0}
          className="p-0 m-0"
        >
          <Image
            src="/images/flashsale-image.png"
            alt="Modern house interior during daytime"
            width={600}
            height={400}
            priority
            className="w-full h-full object-cover"
          />
        </Container>

        <Container
          paddingX={0}
          className="px-[24px] py-[24px] mx-0 my-0 bg-Grey-text-strong grid items-center gap-[40px] text-[#fff]"
        >
          <div>
            <h2
              id="flash-sale-heading"
              className="text-[20px] md:text-[24px] font-semibold leading-[28px] md:leading-[32px]"
            >
              FLASH SALE: 25% OFF All Living Room Furniture
            </h2>
            <p className="mt-2">
              Refresh your space for less! Use code <strong>NEWSPACE</strong> at checkout. Ends March 31st. Free
              shipping on orders over $500.
            </p>
          </div>

          <button
            type="button"
            className="px-3 py-3 rounded-sm bg-Amber-text text-black font-medium transition w-[130px]"
            aria-label="Learn more about Amali Homes flash sale"
          >
            Learn More
          </button>
        </Container>
      </Container>
    </section>
  );
}

export default FlashSale;

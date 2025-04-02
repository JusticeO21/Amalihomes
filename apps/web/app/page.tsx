import Hero from "../sections/hero";
import Usp from "../sections/WhyChooseUs";
import React from "react";
import Category from "../sections/category";
import FlashSale from "../sections/flash-sale";
export default async function Home() {
  return (
    <main>
      <Hero />
      <Usp />
      <Category />
      <FlashSale />
    </main>
  );
}

import Hero from "../sections/hero";
import Usp from "../sections/WhyChooseUs";
import React from "react";
import Category from "../sections/category";
import FlashSale from "../sections/flash-sale";
import {Footer} from "../features/footer";
import { Header } from "features/header";
export default async function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Usp />
      <Category />
      <FlashSale />
      <Footer />
    </main>
  );
}

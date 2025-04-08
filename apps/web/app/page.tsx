import Category from "@/sections/category";
import FlashSale from "@/sections/flash-sale";
import Hero from "@/sections/hero";
import NewArrival from "@/sections/new-arrival";
import Usp from "@/sections/why-choose-us";
export default async function Home() {
  return (
    <main>
      <Hero />
      <Usp />
      <Category />
      <FlashSale />
      <NewArrival />
    </main>
  );
}

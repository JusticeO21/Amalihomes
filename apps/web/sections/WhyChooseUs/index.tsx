import { Container } from "@amalihomes/ui/components/container";
import Image from "next/image";
import Card from "../../component/card";

const whyChooseUsCards = [
  {
    imageUrl: "/images/card-cup.png",
    title: "Premium Quality & Durability",
    description:
      "Our furniture is crafted from top-quality materials, ensuring long-lasting durability, comfort, and timeless style for your home or office.",
  },
  {
    imageUrl: "/images/card-couch.png",
    title: "Wide Selection for Every Space",
    description:
      "From modern to classic designs, we offer a diverse range of furniture to match your taste, whether you're furnishing your living room, bedroom, or workspace.",
  },
  {
    imageUrl: "/images/card-track.png",
    title: "Seamless Shopping & Reliable Delivery",
    description:
      "We make furniture shopping effortless with an easy-to-use website, secure payment options, and fast, reliable delivery straight to your doorstep.",
  },
  {
    imageUrl: "/images/card-moneybag.png",
    title: "Affordable Prices & Exclusive Discounts",
    description:
      "Style shouldn't break the bank! Enjoy competitive pricing, seasonal promotions, and exclusive discounts to make your dream space a reality at the best value.",
  },
];

function Usp() {
  return (
    <section
      className="p-0 m-0"
      aria-labelledby="usp-heading"
      aria-label="Unique selling points section"
    >
      <Container className="grid lg:grid-cols-2 gap-[47px]">
        <Container
          paddingX={0}
          paddingY={0}
          className="grid gap-11 mx-0"
        >
          <div className="p-0">
            <h2
              id="usp-heading"
              className="text-[40px] font-semibold leading-[48px] md:leading-[64px] tracking-tight mb-11"
            >
              Why Choose Us
            </h2>
            <p className="leading-8 md:leading-[26px] text-body text-muted-foreground mb-11 max-w-prose">
              We are committed to providing you with the best furniture shopping experience. Here’s why we stand out:
            </p>
          </div>

          <Container
            paddingX={0}
            paddingY={0}
            className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mx-0"
          >
            {whyChooseUsCards.map((card) => (
              <Card
                key={card.title}
                {...card}
              />
            ))}
          </Container>
        </Container>

        <div className="w-[482px] hidden lg:block m-0">
          <Image
            src="/images/usp-image.png"
            alt="A beautifully furnished living room"
            width={600}
            height={400}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

export default Usp;

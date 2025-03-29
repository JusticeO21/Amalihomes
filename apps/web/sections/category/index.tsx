import { Container } from "@amalihomes/ui/components/container";
import CategoryCard from "../../component/category-card";

const categories = [
  { imageURL: "/images/Category-livingroom.png", title: "Living Room" },
  { imageURL: "/images/Category-office.png", title: "Office" },
  { imageURL: "/images/Category-bedroom.png", title: "Bedroom" },
  { imageURL: "/images/Category-office.png", title: "Office" },
];

function CategorySection() {
  return (
    <section
      aria-labelledby="category-heading"
      aria-label="Product categories section"
      id="category"
    >
      <Container className="grid gap-[40px]">
        <h2
          id="category-heading"
          className="leading-[48px] text-[18px]  md:text-[24px] lg:text-[40px] font-[600] md:leading-[64px] tracking-[0%] mb-[40px]"
        >
          Product Categories
        </h2>
        <Container
          paddingX={0}
          paddingY={0}
          className="grid gap-[24px] mx-0 overflow-hidden grid-flow-col"
          role="list"
        >
          {categories.map(({ imageURL, title }) => (
            <CategoryCard
              key={title}
              imageURL={imageURL}
              title={title}
            />
          ))}
        </Container>
      </Container>
    </section>
  );
}

export default CategorySection;

import { Container, Filter } from "@amalihomes/ui";
import { getSeoTags } from "@/lib/seo/seo";

export const generateMetadata = async () =>
  getSeoTags({
    title: "Shop",
    description: "Shop for quality furniture",
  });
const Shop = () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center">
        <Filter/>
      </Container>
    </main>
  );
};

export default Shop;

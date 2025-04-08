import { fetchProductCategorySection } from "@/lib/contentful/categorySectionService";
import { CategoryFields, CategorySkeleton } from "@/sections/types";
import { getContentfulImage } from "@/utils/contentful";
import { ProductCard } from "@amalihomes/ui/components/card";
import { ProductCarousel } from "@amalihomes/ui/components/carousel";
import { Entry } from "contentful";

const CategorySection = async () => {
  const categoryData = await fetchProductCategorySection();

  if (!categoryData?.heading || !categoryData?.categories?.length) {
    return null;
  }

  return (
    <ProductCarousel
      heading={categoryData.heading as string}
      isCategory
      className="mb-4"
    >
      {[...(categoryData.categories as Entry<CategorySkeleton>[])].map((categoryEntry) => {
        const { title, image } = categoryEntry.fields as CategoryFields;
        const { imageUrl, imageAlt } = getContentfulImage(image, `/images/category-${title}.png`, `${title} category`);
        return (
          <ProductCard
            key={categoryEntry.sys.id}
            src={imageUrl}
            alt={imageAlt}
            caption={title as unknown as string}
            isCategory
          />
        );
      })}
    </ProductCarousel>
  );
};
export default CategorySection;

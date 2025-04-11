import { fetchNewArrivalSection } from "@/lib/contentful/categorySectionService";
import { CategoryFields, CategorySkeleton } from "@/sections/types";
import { getContentfulImage } from "@/utils/contentful";
import { ProductCard } from "@amalihomes/ui/components/card";
import { ProductCarousel } from "@amalihomes/ui/components/carousel";
import { Entry } from "contentful";

const NewArrival = async () => {
  const arrivalData = await fetchNewArrivalSection();

  if (!arrivalData?.heading || !arrivalData?.arrivals?.length) {
    return null;
  }

  return (
    <ProductCarousel
      heading={arrivalData.heading as string}
      className="!mb-64"
    >
      {[...(arrivalData.arrivals as Entry<CategorySkeleton>[])].map((arrivalEntry, id) => {
        const { title, image } = arrivalEntry.fields as CategoryFields;
        const { imageUrl, imageAlt } = getContentfulImage(image, `/images/category-${title}.png`, `${title} category`);
        return (
          <ProductCard
            key={`${arrivalEntry.sys.id}-${id}`}
            src={imageUrl}
            alt={imageAlt}
            caption={title as unknown as string}
          />
        );
      })}
    </ProductCarousel>
  );
};
export default NewArrival;

import { ProductCard } from "../../atoms";
import { ProductCarousel } from "../../molecules";

// Define our own interface for category data, independent of Contentful
export interface Category {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

interface CategorySectionProps {
  heading: string;
  categories: Category[];
  className?: string;
}

export const CategorySection = ({ heading, categories, className = "mb-4" }: CategorySectionProps) => {
  if (!heading || !categories?.length) {
    return null;
  }

  return (
    <ProductCarousel
      heading={heading}
      isCategory
      className={className}
    >
      {categories.map((category) => (
        <ProductCard
          key={category.id}
          src={category.imageUrl}
          alt={category.imageAlt}
          caption={category.title}
          isCategory
        />
      ))}
    </ProductCarousel>
  );
};

export default CategorySection;

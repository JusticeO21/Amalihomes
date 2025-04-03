import { Container } from "@amalihomes/ui/components/container";
import { fetchProductCategorySection } from "../../lib/contentful/categorySectionService";
import { Asset, Entry, EntrySkeletonType } from "contentful";
import CategoryCard from "../../component/category-card";
import { getContentfulImage } from "utils/contentful";

interface CategoryFields {
  title: string;
  image: Asset;
}

type CategorySkeleton = EntrySkeletonType<CategoryFields, "category">;

async function CategorySection() {
  const categoryData = await fetchProductCategorySection();

  if (!categoryData?.heading || !categoryData?.categories?.length) {
    return null;
  }

  return (
    <CategorySectionView
      title={categoryData.heading as string}
      categories={categoryData.categories as Entry<CategorySkeleton>[]}
    />
  );
}

interface CategorySectionViewProps {
  title: string;
  categories: Entry<CategorySkeleton>[];
}

function CategorySectionView({ title, categories }: CategorySectionViewProps) {
  return (
    <section
      aria-labelledby="category-heading"
      aria-label="Product categories section"
      id="category"
    >
      <Container className="grid gap-11 bg-white">
        <CategoryHeading title={title} />
        <CategoryList categories={categories} />
      </Container>
    </section>
  );
}

function CategoryHeading({ title }: { title: string }) {
  return (
    <h2
      id="category-heading"
      className="leading-48 text-18 md:text-24 lg:text-40 font-[600] md:leading-64 tracking-normal mb-40"
    >
      {title}
    </h2>
  );
}

function CategoryList({ categories }: { categories: Entry<CategorySkeleton>[] }) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid gap-24 mx-0 overflow-hidden grid-flow-col"
      role="list"
    >
      {categories.map((categoryEntry) => (
        <CategoryListItem
          key={categoryEntry.sys.id}
          fields={categoryEntry.fields as CategoryFields}
        />
      ))}
    </Container>
  );
}

interface CategoryListItemProps {
  fields: CategoryFields;
}

function CategoryListItem({ fields }: CategoryListItemProps) {
  const { title, image } = fields;
  const { imageUrl } = getContentfulImage(image, `/images/category-${title}.png`, `${title} category`);

  return (
    <CategoryCard
      imageURL={imageUrl}
      title={title}
    />
  );
}

export default CategorySection;

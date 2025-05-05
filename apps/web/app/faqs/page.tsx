import { getSeoTags } from "@/lib/seo/seo";
import { Faqs } from "@amalihomes/ui";
import { faqsLoader } from "./faqs-loader";

export const generateMetadata = async () => {
  const { data } = await faqsLoader();

  return getSeoTags({
    title: data?.title,
    description: data?.description,
  });
};
const FAQs = async () => {
  const { data, error } = await faqsLoader();
  if (error) {
    return <p>{error.message}</p>;
  }

  if (!data) return <p>loading</p>;

  return <Faqs {...data} />;
};

export default FAQs;

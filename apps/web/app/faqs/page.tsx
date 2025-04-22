import { Typography, Container } from "@amalihomes/ui";
import { getSeoTags } from "@/lib/seo/seo";

export const generateMetadata = async () =>
  getSeoTags({
    title: "FAQs",
    description: "Frequently Asked Questions",
  });
const FAQs = async () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center">
        <Typography
          as="h1"
          className="text-16"
        >
          FAQs page in progress. Answers to your questions coming soon!
        </Typography>
      </Container>
    </main>
  );
};

export default FAQs;

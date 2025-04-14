import { Container } from "@amalihomes/ui/components/container";
import { Typography } from "@amalihomes/ui/components/typography";

import { getSeoTags } from "@/lib/seo/seo";
export const generateMetadata = async () =>
  getSeoTags({
    title: "News",
    description: "Latest news and updates",
  });

const News = () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center text-body">
        <Typography
          as="h1"
          className="text-16"
        >
          News page in progress. Stay tuned for the latest updates!
        </Typography>
      </Container>
    </main>
  );
};

export default News;

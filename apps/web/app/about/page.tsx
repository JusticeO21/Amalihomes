import { Typography, Container } from "@amalihomes/ui";
import { getSeoTags } from "@/lib/seo/seo";

export const generateMetadata = async () =>
  getSeoTags({
    title: "About",
    description: "Learn more about us",
  });
const About = () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center">
        <Typography
          as="h1"
          className="text-16"
        >
          About page in progress. Learn more about us soon!
        </Typography>
      </Container>
    </main>
  );
};

export default About;

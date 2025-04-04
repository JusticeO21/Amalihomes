import { Typography } from "@amalihomes/ui/components/typography";
import { Container } from "@amalihomes/ui/components/container";

import React from "react";

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

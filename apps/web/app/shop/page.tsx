import { Typography } from "@amalihomes/ui/components/typography";
import { Container } from "@amalihomes/ui/components/container";
import React from "react";

const Shop = () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center">
        <Typography
          as="h1"
          className="text-16"
        >
          Our shop is coming soon! Stay tuned.
        </Typography>
      </Container>
    </main>
  );
};

export default Shop;

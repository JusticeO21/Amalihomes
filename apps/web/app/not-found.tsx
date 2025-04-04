import { Typography } from "@amalihomes/ui/components/typography";
import { Container } from "@amalihomes/ui/components/container";
import React from "react";
import Link from "next/link";
import { Button } from "@amalihomes/ui/components/button";

const Custom404 = () => {
  return (
    <main>
      <Container className="flex min-h-[70vh] items-center justify-center text-body">
        <div className="text-center">
          <Typography
            as="h1"
            className="mb-16"
          >
            404 - Page Not Found
          </Typography>
          <Typography
            as="p"
            className="text-lg mb-24"
          >
            Oops! It seems like the page you’re looking for doesn’t exist.
          </Typography>
          <Link
            href="/"
            passHref
            className="text-center"
          >
            <Button className="m-auto">Go back to the homepage</Button>
          </Link>
        </div>
      </Container>
    </main>
  );
};

export default Custom404;

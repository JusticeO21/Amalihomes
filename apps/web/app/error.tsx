"use client";
import { useRouter } from "next/navigation";
import { Container } from "@amalihomes/ui/components/container";
import { Typography } from "@amalihomes/ui/components/typography";
import { Button } from "@amalihomes/ui/components/button";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function RouteErrorPage({ error, reset }: ErrorPageProps) {
  const router = useRouter();

  const getErrorContext = () => {
    if (error.message.includes("404")) {
      return {
        title: "Page Not Found",
        description: "The page you're looking for doesn't exist or has been moved.",
        primaryAction: () => router.push("/"),
        primaryLabel: "Go Home",
      };
    }

    if (error.message.includes("auth") || error.message.includes("403")) {
      return {
        title: "Access Denied",
        description: "You need to be logged in to view this page.",
        primaryAction: () => router.push("/login"),
        primaryLabel: "Sign In",
      };
    }

    return {
      title: "Something Went Wrong",
      description: "An unexpected error occurred. Please try again later.",
      primaryAction: reset,
      primaryLabel: "Try Again",
    };
  };

  const { title, description, primaryAction, primaryLabel } = getErrorContext();

  return (
    <Container className="flex min-h-[70vh] items-center justify-center">
      <div className="mx-auto w-full max-w-md px-4 py-12 text-center">
        <Typography
          as="h1"
          className="mb-10"
        >
          {title}
        </Typography>

        <Typography
          as="p"
          className="text-lg mb-24"
        >
          {description}
        </Typography>

        <div className="flex flex-col sm:flex-row sm:justify-center space-x-28 gap-y-8 mt-20">
          <Button
            onClick={primaryAction}
            variant="primary"
            className="w-full justify-center  cursor-pointer"
          >
            {primaryLabel}
          </Button>

          <Button
            onClick={() => router.back()}
            className="justify-center w-full cursor-pointer"
            variant={"secondary"}
          >
            Go Back
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <details className="mt-14 text-left">
            <summary className="cursor-pointer text-sm font-medium text-gray-500">Error Details</summary>
            <div className="mt-2 rounded-lg bg-gray-50 p-4 font-mono text-xs">
              <div className="mb-2 font-semibold">{error.message}</div>
              {error.digest && <div className="mb-2">Digest: {error.digest}</div>}
              <pre className="overflow-x-auto whitespace-pre-wrap">{error.stack}</pre>
            </div>
          </details>
        )}
      </div>
    </Container>
  );
}

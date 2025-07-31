"use client";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ErrorProps {
  title?: string;
  description?: string;
}

const Error = ({
  title = "Something went wrong",
  description = "An unexpected error occurred while processing your request. Please try again later or return to the homepage.",
}: ErrorProps) => {
  return (
    <Container
      elem="main"
      className="min-h-main flex flex-col items-center justify-center"
    >
      <h1 className="text-destructive text-8xl font-extrabold">Error</h1>
      <h2 className="mt-6 text-xl font-bold">{title}</h2>
      <p className="text-muted-foreground mt-3 max-w-md text-center text-sm">
        {description}
      </p>
      <Button asChild className="mt-5">
        <Link href={"/"}>Go back to Home</Link>
      </Button>
    </Container>
  );
};

export default Error;

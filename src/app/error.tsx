"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Error = () => {
  return (
    <div className="min-h-main flex flex-col items-center justify-center">
      <h1 className="text-destructive text-8xl font-extrabold">Error</h1>
      <h2 className="mt-6 text-xl font-bold">Something went wrong</h2>
      <p className="text-muted-foreground mt-3 max-w-md text-center text-sm">
        An unexpected error occurred while processing your request. Please try
        again later or return to the homepage.
      </p>
      <Button asChild className="mt-5">
        <Link href={"/"}>Go back to Home</Link>
      </Button>
    </div>
  );
};

export default Error;

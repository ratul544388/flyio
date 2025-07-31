import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Plane } from "lucide-react"; // Optional icon for visual enhancement

const NoFlightsFound = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center text-center px-4">
      <Plane className="mb-4 h-12 w-12 text-muted-foreground" />
      <h2 className="text-2xl font-bold">No Flights Found</h2>
      <p className="mt-2 text-sm text-muted-foreground max-w-md">
        We couldn&apos;t find any flights matching your search criteria. Try adjusting
        your filters or searching again later.
      </p>
      <Link href="/flights" className={cn(buttonVariants({ variant: "secondary" }), "mt-4")}>
        Return to Home
      </Link>
    </div>
  );
};

export default NoFlightsFound;

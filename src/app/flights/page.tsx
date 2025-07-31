import { API_URL } from "@/constants";
import { Filters } from "@/features/flights/components/filters";
import { FlightCard } from "@/features/flights/components/flight-card";
import { MobileFilters } from "@/features/flights/components/mobile-filters";
import { Flight } from "@/features/flights/types";
import { buildQueryString } from "@/lib/utils";
import { ApiResponse } from "@/types/api";
import { Metadata } from "next";
import { SearchParams } from "next/dist/server/request/search-params";
import { Suspense } from "react";

export const metadata = (): Metadata => {
  return {
    title: "Browse Flights",
    description: "Explore and book from a wide range of flights with FLYIO.",
  };
};

const FlightsPage = async ({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) => {
  const params = await searchParams;
  const queryString = buildQueryString(params);

  const res = await fetch(`${API_URL}/api/flights${queryString}`);
  const {
    data: { flights },
  }: ApiResponse<{ flights: Flight[] }> = await res.json();

  return (
    <div className="flex flex-col gap-5 sm:flex-row">
      <aside className="sticky top-[86px] hidden h-[calc(100vh_-_100px)] min-w-[280px] rounded-lg border p-4 sm:block">
        <Suspense fallback="">
          <Filters />
        </Suspense>
      </aside>
      <MobileFilters />
      <ul className="grid w-full grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-5">
        {flights.map((flight) => (
          <FlightCard key={flight._id} flight={flight} />
        ))}
      </ul>
    </div>
  );
};

export default FlightsPage;

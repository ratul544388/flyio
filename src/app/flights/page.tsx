import { Container } from "@/components/container";
import { API_URL } from "@/constants";
import { FlightCard } from "@/features/flights/components/flight-card";
import { Flight } from "@/features/flights/types";
import { ApiResponse } from "@/types/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Browse Flights",
  description: "Explore and book from a wide range of flights with FLYIO.",
};

const FlightsPage = async () => {
  const res = await fetch(`${API_URL}/api/flights`);
  const {
    data: { flights },
  }: ApiResponse<{ flights: Flight[] }> = await res.json();

  return (
    <Container elem="main" className="py-4">
      <ul className="grid grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] gap-5">
        {flights.map((flight) => (
          <FlightCard key={flight._id} flight={flight} />
        ))}
      </ul>
    </Container>
  );
};

export default FlightsPage;

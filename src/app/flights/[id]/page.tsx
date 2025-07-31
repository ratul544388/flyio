import { FlightDetails } from "@/features/flights/components/flight-details";
import { getFlightById } from "@/features/flights/data";
import { Metadata } from "next";
import { Params } from "next/dist/server/request/params";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> => {
  const { id } = await params;
  const { flight } = await getFlightById(id as string);
  return {
    title: `${flight.airline} | ${flight.flight_number}`,
  };
};

const FlightDetailsPage = async ({ params }: { params: Promise<Params> }) => {
  const { id } = await params;
  const { flight, seats } = await getFlightById(id as string);
  return (
    <div className="max-w-4xl mx-auto py-10">
      <FlightDetails flight={flight} seats={seats} />
    </div>
  );
};

export default FlightDetailsPage;

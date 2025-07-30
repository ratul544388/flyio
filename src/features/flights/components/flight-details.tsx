"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { format } from "date-fns";
import { Flight, Seat } from "../types";
import { BookingButtons } from "./booking-buttons";

type FlightDetailsProps = {
  flight: Flight;
  seats: Seat[];
};

export const FlightDetails = ({ flight, seats }: FlightDetailsProps) => {
  return (
    <>
      <h1 className="mb-2 text-3xl font-bold">Flight Details</h1>
      <p className="text-muted-foreground mb-6">
        Explore complete information about this flight.
      </p>
      <section>
        <Card className="mb-8 shadow-md">
          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">Airline</h2>
                <p>{flight.airline}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Flight Number</h2>
                <p>{flight.flight_number}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold">Availability</h2>
                <Badge
                  variant={flight.availability ? "available" : "unavailable"}
                >
                  {flight.availability ? "Available" : "Unavailable"}
                </Badge>
              </div>
            </div>
            <Separator />
            <div className="flex flex-wrap justify-between gap-4">
              <div>
                <h2 className="text-lg font-semibold">From</h2>
                <p>{flight.origin}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold">To</h2>
                <p>{flight.destination}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Date</h2>
                <p>{format(new Date(flight.date), "PPP")}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Time</h2>
                <p>{flight.time}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Price</h2>
                <p>${flight.price.toFixed(2)}</p>
              </div>
            </div>
            <BookingButtons flight={flight} seats={seats} />
          </CardContent>
        </Card>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Seats</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {seats.map((seat) => (
            <Card
              key={seat._id}
              className={`border-2 p-4 text-center ${
                seat.isBooked
                  ? "border-red-500 bg-red-50"
                  : "border-green-500 bg-green-50"
              }`}
            >
              <p className="text-lg font-medium">{seat.seatNumber}</p>
              <Badge variant={seat.isBooked ? "unavailable" : "available"}>
                {seat.isBooked ? "Booked" : "Available"}
              </Badge>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
};

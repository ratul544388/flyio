import { Flight, Seat } from "@/features/flights/types";

export type Booking = {
  _id: string;
  userId: string;
  flightId: Flight;
  numberOfSeats: number;
  totalPrice: number;
  bookingStatus: string;
  seatsBooked: Seat[];
  bookingDate: string;
  createdAt: string;
};

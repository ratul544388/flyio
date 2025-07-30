import { z } from "zod";

export const createFlightSchema = z.object({
  airline: z.string().min(1, "Airline is required"),
  flight_number: z.string().min(1, "Flight number is required"),
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  date: z.date(),
  time: z.string().min(1, "Time is required"),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  seats: z.array(z.string()).nonempty("At least one seat must be selected"),
});

export type CreateFlightValues = z.infer<typeof createFlightSchema>;

export const updateFlightSchema = z.object({
  airline: z.string().min(1, "Airline is required"),
  flight_number: z.string().min(1, "Flight number is required"),
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  date: z.date(),
  price: z.coerce.number().min(0, "Price must be a positive number"),
});

export type UpdateFlightValues = z.infer<typeof updateFlightSchema>;

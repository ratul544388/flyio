import { ApiResponse } from "@/types/api";
import { cache } from "react";
import { Flight, Seat } from "../types";
import { API_URL } from "@/constants";

export const getFlightById = cache(async (id: string) => {
  const res = await fetch(`${API_URL}/api/flights/${id}`);

  const {
    data: { flight, seats },
  }: ApiResponse<{ flight: Flight; seats: Seat[] }> = await res.json();

  return { flight, seats };
});

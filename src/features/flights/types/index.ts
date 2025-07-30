export type Flight = {
  _id: string;
  airline: string;
  flight_number: string;
  origin: string;
  destination: string;
  date: string;
  time: string;
  price: number;
  availability?: boolean;
};

export type Seat = {
  _id: string;
  seatNumber: string;
  isBooked: boolean;
  bookedBy: string;
  reservedAt: string;
};

export type FlightFilters = {
  origin?: string;
  destination?: string;
  date?: string;
  minPrice?: number;
  maxPrice?: number;
  airline?: string;
  flight_number?: string;
  page?: number;
  limit?: number;
};
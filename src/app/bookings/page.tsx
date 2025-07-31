import { BookingList } from "@/features/bookings/components/booking-list"
import { Metadata } from "next"

export const metadata = (): Metadata => {
  return {
    title: "Bookings",
  };
};

const Bookings = () => {
  return <BookingList/>
}

export default Bookings

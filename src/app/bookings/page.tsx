import { BookingList } from "@/features/bookings/components/booking-list"
import { Metadata } from "next"

export const generateMetadata = (): Metadata => ({
    title: "Bookings",
})

const Bookings = () => {
  return <BookingList/>
}

export default Bookings

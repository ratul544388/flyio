import { Container } from "@/components/container";
import { BookingList } from "@/features/bookings/components/booking-list";
import { Metadata } from "next";

export const metadata = (): Metadata => {
  return {
    title: "Bookings",
  };
};

const Bookings = () => {
  return (
    <Container className="pt-page">
      <BookingList />
    </Container>
  );
};

export default Bookings;

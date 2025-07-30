"use client";

import { Button } from "@/components/ui/button";
import { useModalStore } from "@/hooks/use-modal-store";
import { useEffect, useState } from "react";
import { useConfirmSeats } from "../hooks/use-confirm-seats";
import { Flight, Seat } from "../types";
import BookingModal from "./booking-modal";

interface BookingButtonsProps {
  flight: Flight;
  seats: Seat[];
}

export const BookingButtons = ({ flight, seats }: BookingButtonsProps) => {
  const { onOpen } = useModalStore();
  const { confirmSeats, isPending } = useConfirmSeats();
  const [reservedSeats, setReservedSeats] = useState<string[]>([]);
  const [confirmCountDown, setConfirmCountdown] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setConfirmCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [confirmCountDown]);

  return (
    <div className="ml-auto">
      {flight.availability && !!!confirmCountDown && (
        <Button
          onClick={() =>
            onOpen("bookingModal", {
              flightId: flight._id,
              seats: seats.filter((s) => !s.isBooked),
            })
          }
          className="ml-auto"
        >
          Book now
        </Button>
      )}
      {!!confirmCountDown && (
        <div className="flex flex-col items-end gap-1">
          <div className="flex items-center gap-2">
            {confirmCountDown}s
            <Button
              disabled={isPending}
              onClick={() =>
                confirmSeats({
                  flightId: flight._id,
                  seatIds: reservedSeats,
                  onConfirm: () => {
                    setConfirmCountdown(0);
                  },
                })
              }
            >
              Confirm Seats
            </Button>
          </div>
          <p className="text-destructive text-end text-sm">
            Please confirm your seats within 2 minutes, otherwise bookings will
            be canceled
          </p>
        </div>
      )}
      <BookingModal
        onBook={(reservedSeats) => {
          setConfirmCountdown(120);
          setReservedSeats(reservedSeats);
        }}
      />
    </div>
  );
};

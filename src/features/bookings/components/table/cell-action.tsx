"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useModalStore } from "@/hooks/use-modal-store";
import { Edit, MoreVertical, Plane, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Booking } from "../../types";

interface CellActionProps {
  booking: Booking;
}

export const CellAction = ({ booking }: CellActionProps) => {
  const router = useRouter();
  const { onOpen } = useModalStore();

  const items = [
    {
      label: "View Flight",
      icon: Plane,
      onClick: () => router.push(`/flights/${booking.flightId._id}`),
    },
    {
      label: "Update Booking",
      icon: Edit,
      onClick: () =>
        onOpen("updateBooking", {
          flightId: booking.flightId._id,
          bookingId: booking._id,
          seats: booking.seatsBooked.map((seat) => seat),
        }),
    },
    {
      label: "Delete Booking",
      icon: Trash,
      onClick: () => onOpen("deleteBooking", { bookingId: booking._id }),
    },
  ];

  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon">
          <MoreVertical className="size-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="flex w-fit flex-col px-0 py-2">
        {items.map(({ label, icon: Icon, onClick }) => (
          <Button
            key={label}
            className="justify-start"
            onClick={() => {
              onClick();
              setOpen(false);
            }}
            variant="ghost"
          >
            <Icon className="size-4" />
            {label}
          </Button>
        ))}
      </PopoverContent>
    </Popover>
  );
};

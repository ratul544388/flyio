"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Booking } from "../../types";
import { useState } from "react";
import { DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Edit, Icon, MoreVertical, Plane, Trash } from "lucide-react";
import { useRouter } from "next/navigation";

interface CellActionProps {
  booking: Booking;
}

export const CellAction = ({ booking }: CellActionProps) => {
  const router = useRouter();
  const items = [
    {
      label: "View Flight",
      icon: Plane,
      onClick: () => router.push(`/flights/${booking.flightId._id}`),
    },
    {
      label: "Update Booking",
      icon: Edit,
      onClick: () => {},
    },
    {
      label: "Delete Booking",
      icon: Trash,
      onClick: () => {},
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

"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Booking } from "../../types";
import { formatDate, formatPrice } from "@/lib/utils";
import { CellAction } from "./cell-action";

export const columns: ColumnDef<Booking>[] = [
  {
    accessorKey: "flightId",
    header: "Flight Name",
    cell: ({ row }) => row.original.flightId.airline,
  },
  {
    accessorKey: "seatsBooked",
    header: "Seat booked",
    cell: ({ row }) => {
      const seats = row.original.seatsBooked.map((seat) => seat.seatNumber);
      return (
        <ul className="flex gap-1">
          {seats.map((seat) => (
            <li key={seat} className="rounded-md border p-2 shadow-sm">
              {seat}
            </li>
          ))}
        </ul>
      );
    },
  },
  {
    accessorKey: "totalPrice",
    header: "Total Price",
    cell: ({ row }) => formatPrice(row.original.totalPrice),
  },
  {
    accessorKey: "bookingStatus",
    header: "Booking Status",
  },
  {
    accessorKey: "bookingDate",
    header: "Booking Date",
    cell: ({ row }) => formatDate(row.original.bookingDate),
  },
  {
    accessorKey: "_id",
    cell: ({ row }) => <CellAction booking={row.original} />,
  },
];

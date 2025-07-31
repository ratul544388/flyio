"use client";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { useUser } from "@/providers/user-context-provider";
import { Edit, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Flight } from "../types";
import { useModalStore } from "@/hooks/use-modal-store";

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
  const { user } = useUser();
  const { onOpen } = useModalStore();
  const isAdmin = user?.role === "ADMIN";
  const router = useRouter();

  return (
    <motion.li
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      className="max-w-[350px] mx-auto w-full justify-between rounded-lg border bg-background shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <Link className="p-5 flex flex-col h-full justify-between" href={`/flights/${flight._id}`}>
        <div className="">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xl font-bold text-indigo-600">
              {flight.airline}
            </h2>
            <span className="font-mono text-gray-500">
              {flight.flight_number}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <div>
              <p className="font-semibold">From</p>
              <p>{flight.origin}</p>
            </div>
            <div>
              <p className="font-semibold">To</p>
              <p>{flight.destination}</p>
            </div>
            <div>
              <p className="font-semibold">Date</p>
              <p>{flight.date}</p>
            </div>
            <div>
              <p className="font-semibold">Time</p>
              <p>{flight.time}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-5">
          {isAdmin && (
            <div className="flex gap-3">
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  router.push(`/flights/${flight._id}/edit`);
                }}
                variant="outline"
                size="icon"
              >
                <Edit className="size-4" />
              </Button>
              <Button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onOpen("deleteFlight", { flightId: flight._id });
                }}
                variant="outline"
                size="icon"
              >
                <Trash className="size-4" />
              </Button>
            </div>
          )}
          <div className="ml-auto text-lg font-semibold text-green-600">
            ${flight.price}
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

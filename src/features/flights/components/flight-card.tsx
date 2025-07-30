"use client";
import { motion } from "framer-motion";

import { Flight } from "../types";
import Link from "next/link";

interface FlightCardProps {
  flight: Flight;
}

export const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <motion.li
      whileHover={{ scale: 1.04, transition: { duration: 0.3 } }}
      className="flex flex-col justify-between rounded-lg border bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
    >
      <Link className="p-5" href={`/`}>
        <div>
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
        <div className="mt-4 text-right text-lg font-semibold text-green-600">
          ${flight.price}
        </div>
      </Link>
    </motion.li>
  );
};

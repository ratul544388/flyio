"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FlightFilters } from "../types";

export const Filters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [filters, setFilters] = useState<FlightFilters>({});
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const initialFilters: FlightFilters = {
      origin: searchParams.get("origin") || undefined,
      destination: searchParams.get("destination") || undefined,
      date: searchParams.get("date") || undefined,
      airline: searchParams.get("airline") || undefined,
      flight_number: searchParams.get("flight_number") || undefined,
    };

    const minPrice = Number(searchParams.get("minPrice"));
    const maxPrice = Number(searchParams.get("maxPrice"));

    if (!isNaN(minPrice) && !isNaN(maxPrice)) {
      setPriceRange([minPrice, maxPrice]);
    }

    setFilters(initialFilters);
  }, [searchParams]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const params = new URLSearchParams();

    Object.entries(filters).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        params.set(key, String(value));
      }
    });

    params.set("minPrice", String(priceRange[0]));
    params.set("maxPrice", String(priceRange[1]));

    router.push(`/flights?${params.toString()}`);
  };

  const handleClearFilters = () => {
    setFilters({});
    setPriceRange([0, 2000]);
    router.push("/flights");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="flex flex-col gap-4"
    >
      <Input
        type="text"
        name="origin"
        placeholder="Origin"
        value={filters.origin || ""}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="destination"
        placeholder="Destination"
        value={filters.destination || ""}
        onChange={handleInputChange}
      />
      <Input
        type="date"
        name="date"
        value={filters.date || ""}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="airline"
        placeholder="Airline"
        value={filters.airline || ""}
        onChange={handleInputChange}
      />
      <Input
        type="text"
        name="flight_number"
        placeholder="Flight Number"
        value={filters.flight_number || ""}
        onChange={handleInputChange}
      />

      <div>
        <Label className="mb-2 block">
          Price Range (${priceRange[0]} - ${priceRange[1]})
        </Label>
        <Slider
          min={0}
          max={2000}
          step={50}
          value={priceRange}
          onValueChange={(val: [number, number]) => setPriceRange(val)}
          className="w-full"
        />
      </div>

      <div className="mt-3 flex gap-2">
        {searchParams.size > 0 && (
          <Button type="button" variant="outline" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        )}
        <Button type="submit" className="flex-1">
          Apply Filters
        </Button>
      </div>
    </form>
  );
};

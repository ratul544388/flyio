"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Filters } from "./filters";
import { Filter } from "lucide-react";

export const MobileFilters = () => {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="relative z-20 ml-auto w-fit sm:hidden"
        >
          <Filter />
          Filters
        </Button>
      </PopoverTrigger>
      <PopoverContent className="" align="end">
        <Filters onFilter={() => setOpen(false)} />
      </PopoverContent>
      <span
        className={cn(
          "pointer-events-none fixed inset-0 bg-black/20 opacity-0 transition",
          open && "pointer-events-auto opacity-100",
        )}
      />
    </Popover>
  );
};

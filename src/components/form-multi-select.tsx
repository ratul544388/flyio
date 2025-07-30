"use client";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import * as React from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

interface FormMultiSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
}

export function FormMultiSelect<T extends FieldValues>({
  control,
  name,
  label,
  disabled = false,
  options,
}: FormMultiSelectProps<T>) {
  const [open, setOpen] = React.useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues = (field.value as string[]) || [];

        const onSelect = (value: string) => {
          let newValues: string[];
          if (selectedValues.includes(value)) {
            newValues = selectedValues.filter((v) => v !== value);
          } else {
            newValues = [...selectedValues, value];
          }
          field.onChange(newValues);
        };


        return (
          <FormItem>
            <FormControl>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    disabled={disabled}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      "relative h-[60px] pr-8! overflow-hidden w-full justify-between pt-4.5 text-base font-normal",
                      disabled && "pointer-events-none opacity-50",
                    )}
                  >
                    <span
                      className={cn(
                        "absolute transition! text-muted-foreground top-1/2 -translate-y-1/2",
                        open && "text-primary top-3 text-sm",
                        selectedValues.length && "top-3 text-sm",
                      )}
                    >
                      Seats
                    </span>
                    {selectedValues.length > 0 && (
                      <span className="truncate">
                        {options
                          .filter((opt) => selectedValues.includes(opt.value))
                          .map((opt) => opt.label)
                          .join(", ")}
                      </span>
                    )}
                    <ChevronsUpDown className="absolute size-4 top-1/2 -translate-y-1/2 right-3 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0" align="start">
                  <Command>
                    <CommandInput placeholder={`Search ${label || name}...`} />
                    <CommandList>
                      <CommandEmpty>No results found.</CommandEmpty>
                      <CommandGroup>
                        {options.map((option) => (
                          <CommandItem
                            key={option.value}
                            onSelect={() => {
                              onSelect(option.value);
                            }}
                            className="flex items-center justify-between"
                          >
                            {option.label}
                            {selectedValues.includes(option.value) && (
                              <Check className="ml-2 h-4 w-4" />
                            )}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

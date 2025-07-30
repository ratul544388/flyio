import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import type { Control, FieldValues, Path } from "react-hook-form";
import { buttonVariants } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  type?: "text" | "number";
  disabled?: boolean;
  autoFocus?: boolean;
}

export function FormDatePicker<T extends FieldValues>({
  control,
  name,
  label,
  disabled = false,
}: FormInputProps<T>) {
  const [open, setOpen] = useState(false);
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger
                className={buttonVariants({
                  variant: "outline",
                  className: "relative px-3! pt-4.5 font-normal text-base w-full h-[60px] justify-start",
                })}
              >
                <span
                  className={cn(
                    "text-muted-foreground peer-focus:text-primary pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 rounded-md capitalize transition-all select-none",
                    open && "top-3 text-sm text-primary",
                    field.value && "top-3 text-sm",
                  )}
                >
                  {label || field.name}
                </span>
                {field.value && format(field.value, "yyyy-MM-dd")}
                <CalendarIcon className="size-4 ml-auto text-muted-foreground"/>
              </PopoverTrigger>
              <PopoverContent className="p-0 w-auto overflow-hidden">
                <Calendar
                  mode="single"
                  captionLayout="dropdown"
                  disabled={disabled}
                  selected={field.value}
                  onSelect={(date) => {
                    field.onChange(date);
                    setOpen(false);
                  }}
                />
              </PopoverContent>
            </Popover>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

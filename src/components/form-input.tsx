import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { Control, FieldValues, Path } from "react-hook-form";

interface FormInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  type?: "text" | "number" | "time";
  disabled?: boolean;
  autoFocus?: boolean;
}

export function FormInput<T extends FieldValues>({
  control,
  name,
  label,
  type = "text",
  disabled = false,
  autoFocus,
}: FormInputProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="relative">
              <Input
                type={type}
                disabled={disabled}
                value={field.value || ""}
                onChange={field.onChange}
                autoFocus={autoFocus}
                className={cn(`peer h-[60px] pt-4`)}
              />
              <span
                className={cn(
                  "text-muted-foreground peer-focus:text-primary pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 rounded-md capitalize transition-all select-none peer-focus:top-3 peer-focus:text-sm",
                  type === "time" && "top-3 text-sm",
                  field.value && "top-3 text-sm",
                )}
              >
                {label || field.name}
              </span>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

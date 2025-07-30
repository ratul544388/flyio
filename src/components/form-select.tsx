import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Control, FieldValues, Path } from "react-hook-form";

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  options: { label: string; value: string }[];
}

export function FormSelect<T extends FieldValues>({
  control,
  name,
  label,
  disabled = false,
  options,
}: FormSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select
              disabled={disabled}
              value={field.value || ""}
              onValueChange={field.onChange}
            >
              <SelectTrigger className="w-full h-[60px]! capitalize text-base">
                <SelectValue placeholder={label || field.name} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {options.map(({ label, value }) => (
                    <SelectItem key={value} value={value}>
                      {label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

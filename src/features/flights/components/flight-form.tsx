"use client";

import { FormDatePicker } from "@/components/form-date-picker";
import { FormInput } from "@/components/form-input";
import { FormWrapper } from "@/components/form-wrapper";
import { Button } from "@/components/ui/button";
import { useFlight } from "../hooks/use-flight";

export const FlightForm = () => {
  const { mutate, isPending, form } = useFlight();

  return (
    <FormWrapper
      form={form}
      onSubmit={mutate}
      title="Create a New Flight"
      description="Add flight details to the system."
    >
      <FormInput name="airline" control={form.control} disabled={isPending} />
      <FormInput
        name="flight_number"
        label="Flight Number"
        control={form.control}
        disabled={isPending}
      />
      <FormInput name="origin" control={form.control} disabled={isPending} />
      <FormInput
        name="destination"
        control={form.control}
        disabled={isPending}
      />
      <FormDatePicker control={form.control} name="date" disabled={isPending} />
      <FormInput
        control={form.control}
        name="time"
        type="time"
        disabled={isPending}
      />
      <FormInput
        name="price"
        type="number"
        control={form.control}
        disabled={isPending}
      />
      <Button type="submit" disabled={isPending} className="w-full">
        Create Flight
      </Button>
    </FormWrapper>
  );
};

"use client";

import { FormDatePicker } from "@/components/form-date-picker";
import { FormInput } from "@/components/form-input";
import { FormMultiSelect } from "@/components/form-multi-select";
import { FormWrapper } from "@/components/form-wrapper";
import { Button } from "@/components/ui/button";
import { seats } from "@/constants";
import { useCreateFlight } from "../hooks/use-create-flight";

export const CreateFlightForm = () => {
  const { createFlight, isPending, form } = useCreateFlight();

  return (
    <FormWrapper
      form={form}
      onSubmit={createFlight}
      title="Create New Flight"
      description="Enter new flight details to add a flight."
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
        name="price"
        type="number"
        control={form.control}
        disabled={isPending}
      />
      <FormInput
        control={form.control}
        name="time"
        type="time"
        disabled={isPending}
      />
      <FormMultiSelect
        name="seats"
        control={form.control}
        options={seats.map((seat) => ({
          label: seat,
          value: seat,
        }))}
        disabled={isPending}
      />
      <Button type="submit" disabled={isPending} className="w-full">
        Create Flight
      </Button>
    </FormWrapper>
  );
};

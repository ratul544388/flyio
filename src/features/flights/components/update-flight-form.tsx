"use client";

import { FormDatePicker } from "@/components/form-date-picker";
import { FormInput } from "@/components/form-input";
import { FormWrapper } from "@/components/form-wrapper";
import { Button } from "@/components/ui/button";
import { useUpdateFlight } from "../hooks/use-update-flight";
import { Flight } from "../types";

export const UpdateFlightForm = ({ flight }: { flight: Flight }) => {
  const { updateFlight, isPending, form } = useUpdateFlight(flight);

  return (
    <FormWrapper
      form={form}
      onSubmit={updateFlight}
      title="Update"
      description="Update the flight"
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
      <Button type="submit" disabled={isPending} className="w-full">
        Save
      </Button>
    </FormWrapper>
  );
};

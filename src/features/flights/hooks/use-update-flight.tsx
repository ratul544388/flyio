import { request } from "@/lib/request";
import { ApiErrorResponse, ApiResponse } from "@/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Flight } from "../types";
import { updateFlightSchema, UpdateFlightValues } from "../validations";

export const useUpdateFlight = (flight: Flight) => {
  const router = useRouter();
  const form = useForm<UpdateFlightValues>({
    resolver: zodResolver(updateFlightSchema),
    defaultValues: {
      airline: flight.airline,
      flight_number: flight?.flight_number,
      origin: flight.origin,
      destination: flight.destination,
      date: new Date(flight.date),
      price: flight.price,
    },
  });

  const { mutate, isPending } = useMutation<
    ApiResponse<{ flight: Flight }>,
    AxiosError<ApiErrorResponse>,
    UpdateFlightValues
  >({
    mutationFn: (data) => {
      const formattedValues = {
        ...data,
        date: format(data.date, "yyyy-MM-dd"),
      };
      return request({
        url: `/flights/${flight._id}`,
        method: "patch",
        data: formattedValues,
      });
    },
    onSuccess: (res) => {
      toast.success(res.message);
      router.push("/flights");
      router.refresh();
    },
    onError: (error) => toast.error(error.response?.data.message),
  });

  return { form, updateFlight: mutate, isPending };
};

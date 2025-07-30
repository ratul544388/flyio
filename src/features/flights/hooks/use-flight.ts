import { request } from "@/lib/request";
import { ApiErrorResponse, ApiResponse } from "@/types/api";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { flightSchema, FlightValues } from "../validations";
import { Flight } from "../types";

export const useFlight = () => {
  const form = useForm<FlightValues>({
    resolver: zodResolver(flightSchema),
    defaultValues: {
      airline: "",
      flight_number: "",
      origin: "",
      destination: "",
      date: undefined,
      time: "",
      price: 0,
    },
  });

  const { mutate, isPending } = useMutation<
    ApiResponse<{ flight: Flight }>,
    AxiosError<ApiErrorResponse>,
    FlightValues
  >({
    mutationFn: (data) => request({ url: "/flights", data }),
    onSuccess: (res) => toast.success(res.message),
    onError: (error) => toast.error(error.response?.data.message),
  });

  return { form, mutate, isPending };
};

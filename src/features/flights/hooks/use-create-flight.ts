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
import { createFlightSchema, CreateFlightValues } from "../validations";

export const useCreateFlight = () => {
  const router = useRouter();
  const form = useForm<CreateFlightValues>({
    resolver: zodResolver(createFlightSchema),
    defaultValues: {
      airline: "",
      flight_number: "",
      origin: "",
      destination: "",
      date: undefined,
      price: 0,
    },
  });

  const { mutate, isPending } = useMutation<
    ApiResponse<{ flight: Flight }>,
    AxiosError<ApiErrorResponse>,
    CreateFlightValues
  >({
    mutationFn: (data) => {
      const formattedValues = {
        ...data,
        date: format(data.date, "yyyy-MM-dd"),
      };
      return request({ url: "/flights", data: formattedValues });
    },
    onSuccess: (res) => {
      toast.success(res.message);
      router.push("/flights");
      router.refresh();
    },
    onError: (error) => toast.error(error.response?.data.message),
  });

  return { form, createFlight: mutate, isPending };
};

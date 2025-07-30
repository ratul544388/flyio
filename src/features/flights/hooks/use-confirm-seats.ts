import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/request"; // Adjust the import based on your project
import { ApiErrorResponse, ApiResponse } from "@/types/api";
import { toast } from "sonner";
import { AxiosError } from "axios";

interface ConfirmSeatsPayload {
  flightId: string;
  seatIds: string[];
  onConfirm: () => void;
}

export const useConfirmSeats = () => {
  const { mutate, isPending } = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>,
    ConfirmSeatsPayload
  >({
    mutationFn: ({ flightId, seatIds }) =>
      request({
        url: "/bookings/confirm",
        data: { flightId, seatIds },
      }),
    onSuccess: (res, variables) => {
      toast.success(res.message);
      variables.onConfirm();
    },
    onError: (error) => {
      toast.error(error.response?.data.message);
    },
  });

  return {
    confirmSeats: mutate,
    isPending,
  };
};

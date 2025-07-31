"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { getFlightById } from "@/features/flights/data";
import { useModalStore } from "@/hooks/use-modal-store";
import { request } from "@/lib/request";
import type { ApiErrorResponse, ApiResponse } from "@/types/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const UpdateBookingModal = () => {
  const queryClient = useQueryClient();
  const { open, type, data, onClose } = useModalStore();

  const isOpen = type === "updateBooking" && open;

  const [newSeatNumbers, setNewSeatNumber] = useState<string[]>([]);

  useEffect(() => {
    if (!data?.seats) return;
    setNewSeatNumber(data.seats.map((item) => item.seatNumber));
  }, [data?.seats]);

  const { mutate, isPending } = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: () =>
      request({
        method: "patch",
        url: `/bookings/${data?.bookingId}`,
        data: {
          newSeatNumbers,
        },
      }),
    onSuccess: (res) => {
      onClose();
      toast.success(res.message || "Booking updated successfully.");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Failed to update booking.");
    },
  });

  const { data: flightInfo, isFetching: isFetchingFlight } = useQuery({
    queryKey: ["flight", data?.bookingId],
    enabled: !!data?.flightId,
    queryFn: async () => {
      const res = await getFlightById(data?.flightId as string);
      return res;
    },
  });

  const handleClickSeat = (currentSeat: string) => {
    if (newSeatNumbers.includes(currentSeat)) {
      return setNewSeatNumber((prev) => prev.filter((s) => s !== currentSeat));
    }
    setNewSeatNumber((prev) => [...prev, currentSeat]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Booking</DialogTitle>
          <DialogDescription>
            Choose the seats that you want to change
          </DialogDescription>
        </DialogHeader>
        <div className="">
          <h4 className="mb-2 text-lg font-medium">Seats</h4>
          {isFetchingFlight ? (
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <Skeleton key={i} className="size-9 rounded-md" />
              ))}
            </div>
          ) : (
            <ul className="flex flex-wrap gap-2">
              {flightInfo?.seats.map(({ _id, seatNumber }) => (
                <li key={_id}>
                  <Button
                    onClick={() => handleClickSeat(seatNumber)}
                    size="icon"
                    variant={
                      newSeatNumbers.includes(seatNumber)
                        ? "default"
                        : "outline"
                    }
                  >
                    {seatNumber}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <DialogFooter className="mt-3 flex justify-end gap-3">
          <Button variant="outline" disabled={isPending} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="default"
            disabled={isPending}
            onClick={() => mutate()}
          >
            {isPending && <Loader2 className="mr-2 size-4 animate-spin" />}
            Update
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

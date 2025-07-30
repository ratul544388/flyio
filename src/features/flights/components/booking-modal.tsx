"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";
import { useState } from "react";
import clsx from "clsx";
import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { ApiErrorResponse, ApiResponse } from "@/types/api";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const BookingModal = ({
  onBook,
}: {
  onBook: (reservedSeats: string[]) => void;
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const router = useRouter();
  const { open, type, onClose, data } = useModalStore();

  const isBookingModalOpen = open && type === "bookingModal";

  const { mutate, isPending } = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: () =>
      request({
        url: "/bookings",
        data: {
          flightId: data?.flightId,
          seatIds: selectedSeats,
        },
      }),
    onSuccess: (res) => {
      toast.success(res.message);
      router.refresh();
      onBook(selectedSeats);
      setSelectedSeats([]);
      onClose();
    },
    onError: (error) => {
      console.error("Booking failed", error);
      toast.error(error.response?.data.message);
    },
  });

  if (!data?.seats?.length) return null;

  const toggleSeat = (seatId: string) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId],
    );
  };

  return (
    <Dialog
      open={isBookingModalOpen}
      onOpenChange={(open) => {
        if (!isPending && !open) onClose();
      }}
    >
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Confirm Your Seat</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-4">
          <div className="text-muted-foreground text-sm">Available Seats</div>
          <div className="flex flex-wrap gap-2">
            {data.seats.map(({ _id, seatNumber }) => {
              const isSelected = selectedSeats.includes(_id);
              return (
                <Button
                  key={_id}
                  variant={isSelected ? "default" : "outline"}
                  onClick={() => toggleSeat(_id)}
                  className={clsx("w-20", {
                    "bg-primary text-white": isSelected,
                  })}
                >
                  {seatNumber}
                </Button>
              );
            })}
          </div>
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={onClose} disabled={isPending}>
              Cancel
            </Button>
            <Button
              disabled={selectedSeats.length === 0 || isPending}
              onClick={() => mutate()}
            >
              {isPending ? "Booking..." : "Proceed to Book"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingModal;

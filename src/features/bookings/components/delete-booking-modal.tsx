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
import { useModalStore } from "@/hooks/use-modal-store";
import { request } from "@/lib/request";
import type { ApiErrorResponse, ApiResponse } from "@/types/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

export const DeleteBookingModal = () => {
  const queryClient = useQueryClient();
  const { open, type, data, onClose } = useModalStore();

  const { mutate, isPending } = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: () =>
      request({
        method: "DELETE",
        url: `/bookings/${data?.bookingId}`,
      }),
    onSuccess: (res) => {
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
      onClose();
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Failed to delete.");
    },
  });

  const isOpen = type === "deleteBooking" && open;

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This will permanently delete the flight. This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-3 flex justify-end gap-3">
          <Button variant="outline" disabled={isPending} onClick={onClose}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            disabled={isPending}
            onClick={() => mutate()}
          >
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

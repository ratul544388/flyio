"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { request } from "@/lib/request";
import { toast } from "sonner";
import type { ApiErrorResponse, ApiResponse } from "@/types/api";
import type { AxiosError } from "axios";
import { useModalStore } from "@/hooks/use-modal-store";

export const DeleteFlightModal = () => {
  const router = useRouter();
  const { open, type, data, onClose } = useModalStore();

  const { mutate, isPending } = useMutation<
    ApiResponse,
    AxiosError<ApiErrorResponse>
  >({
    mutationFn: () =>
      request({
        method: "DELETE",
        url: `/flights/${data?.flightId}`,
      }),
    onSuccess: (res) => {
      toast.success(res.message);
      router.refresh();
      onClose();
    },
    onError: (error) => {
      toast.error(error.response?.data.message || "Failed to delete.");
    },
  });

  const isOpen = type === "deleteFlight" && open;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
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

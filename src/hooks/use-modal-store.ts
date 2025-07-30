import { Seat } from "@/features/flights/types";
import { create } from "zustand";

type ModalType = "confirmModal" | "bookingModal" | "deleteBooking" | null;

type ModalData = {
  flightId?: string;
  bookingId?: string;
  seats?: Seat[]
};

type UseModalStore = {
  type: ModalType;
  open: boolean;
  data?: ModalData;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
};

export const useModalStore = create<UseModalStore>((set) => ({
  type: null,
  open: false,
  data: {},
  onOpen: (type, data = {}) => set({ type, open: true, data }),
  onClose: () => set({ type: null, open: false, data: {} }),
}));

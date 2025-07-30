"use client";

import { DeleteFlightModal } from "@/features/flights/components/delete-flight-modal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted) return;
  return (
     <>
        <DeleteFlightModal/>
     </>
    );
}

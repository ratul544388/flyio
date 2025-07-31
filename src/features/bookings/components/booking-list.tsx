"use client";

import { DataTable } from "@/components/data-table";
import { PageLoader } from "@/components/page-loader";
import { request } from "@/lib/request";
import { ApiResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { Booking } from "../types";
import { columns } from "./table/columns";
import Error from "@/app/error";
import { DeleteBookingModal } from "./delete-booking-modal";
import { UpdateBookingModal } from "./update-booking-modal";

export const BookingList = () => {
  const { data, isPending, isError } = useQuery<ApiResponse<Booking[]>>({
    queryKey: ["bookings"],
    queryFn: () => request({ method: "get", url: "/bookings" }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  if (isError) {
    return (
      <Error description="Error while fetching bookings or Your token has been expired" />
    );
  }

  return (
    <>
      <DataTable data={data.data} columns={columns} />
      <DeleteBookingModal/>
      <UpdateBookingModal/>
    </>
  );
};

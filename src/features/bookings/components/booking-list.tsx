"use client";

import { request } from "@/lib/request";
import { ApiResponse } from "@/types/api";
import { useQuery } from "@tanstack/react-query";
import { Booking } from "../types";
import { PageLoader } from "@/components/page-loader";
import { DataTable } from "@/components/data-table";
import { columns } from "./table/columns";

export const BookingList = () => {
  const { data, isPending, isError } = useQuery<ApiResponse<Booking[]>>({
    queryKey: ["bookings"],
    queryFn: () => request({ method: "get", url: "/bookings" }),
  });

  if (isPending) {
    return <PageLoader />;
  }

  if (isError) {
    return "Error...";
  }

  return (
    <div>
      <DataTable data={data.data} columns={columns} />
    </div>
  );
};

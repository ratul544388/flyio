import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildQueryString(
  params: Record<string, string | string[] | undefined>,
): string {
  const query = new URLSearchParams();
  query.append("limit", "10");

  Object.entries(params).forEach(([key, value]) => {
    if (typeof value === "string") {
      query.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((v) => query.append(key, v));
    }
  });

  return `?${query.toString()}`;
}

export function convertTo24HourFormat(time?: string): string {
  if (!time) return "";

  // Replace dot with colon for consistent parsing
  const cleanTime = time.replace(".", ":").trim();

  const [rawTime, period] = cleanTime.split(/ ?(AM|PM)/i);
  if (!rawTime || !period) return "";

  const [hourStr, minuteStr] = rawTime.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = minuteStr || "00";

  if (period.toUpperCase() === "PM" && hour < 12) hour += 12;
  if (period.toUpperCase() === "AM" && hour === 12) hour = 0;

  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price);
};

import { format } from "date-fns";

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  return format(date, "dd MMMM yyyy");
};

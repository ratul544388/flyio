import { User } from "@/features/auth/types";
import { Home, List, Map } from "lucide-react";

export const navLinks = (user: User | null) => [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Flights",
    href: "/flights",
    icon: Map,
  },
  ...(user?.role === "ADMIN"
    ? [
        {
          label: "Bookings",
          href: "/bookings",
          icon: List,
        },
      ]
    : []),
];

export const API_URL = "https://flight-server-six.vercel.app";

export const placeholderAvatar = "/placeholder-avatar.webp";

export const seats = [
  "1A",
  "1B",
  "1C",
  "1D",
  "2A",
  "2B",
  "2C",
  "2D",
  "3A",
  "3B",
  "3C",
  "3D",
  "4A",
  "4B",
  "4C",
  "4D",
  "5A",
  "5B",
  "5C",
  "5D",
  "6A",
  "6B",
  "6C",
  "6D",
  "7A",
  "7B",
  "7C",
  "7D",
  "8A",
  "8B",
  "8C",
  "8D",
  "9A",
  "9B",
  "9C",
  "9D",
  "10A",
  "10B",
  "10C",
  "10D",
  "11A",
  "11B",
  "11C",
  "11D",
  "12A",
  "12B",
  "12C",
  "12D",
  "13A",
  "13B",
  "13C",
  "13D",
  "14A",
  "14B",
  "14C",
  "14D",
  "15A",
  "15B",
  "15C",
  "15D",
];

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

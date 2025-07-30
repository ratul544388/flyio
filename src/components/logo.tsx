import { cn } from "@/lib/utils";
import Link from "next/link";
import { PiAirplaneInFlightFill } from "react-icons/pi";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className, }: LogoProps) => {
  return (
    <Link
      href="/"
      className={cn(
        "flex text-xl font-semibold items-center gap-1.5",
        className
      )}
    >
      <PiAirplaneInFlightFill className="size-6" />
      FLYIO
    </Link>
  );
};

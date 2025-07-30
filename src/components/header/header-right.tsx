"use client";
import { cn } from "@/lib/utils";
import { useUser } from "@/providers/user-context-provider";
import { Bell, PlusCircle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, buttonVariants } from "../ui/button";
import { Skeleton } from "../ui/skeleton";
import { UserButton } from "./user-button";

export const HeaderRight = () => {
  const { user, loading } = useUser();
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-3">
      {user?.role === "ADMIN" && (
        <Link href="/flights/new" className={buttonVariants()}>
          <PlusCircle />
          Add New
        </Link>
      )}
      <Button variant="navbar" size="icon" className="rounded-full">
        <Bell className="size-5" />
      </Button>
      {loading && <Skeleton className="size-8 min-w-8 rounded-full" />}
      {user && !loading && <UserButton />}
      {!user && !loading && (
        <>
          <Link
            href="/register"
            className={buttonVariants({
              variant: "navbar",
              className: cn(
                "border-primary hover:border-primary/90 border-[1.5px]",
                pathname === "/register" && "hidden!",
              ),
            })}
          >
            Register
          </Link>
          <Link
            href="/login"
            className={buttonVariants({
              className: cn(pathname === "/login" && "hidden!"),
            })}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

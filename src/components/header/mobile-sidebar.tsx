"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Logo } from "../logo";
import { useUser } from "@/providers/user-context-provider";
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="navbar"
          size="icon"
          className="sm:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="py-4">
        <SheetHeader className="hidden">
          <SheetTitle>Sidebar</SheetTitle>
          <SheetDescription>This is your mobile sidebar.</SheetDescription>
        </SheetHeader>
        <Logo className="ml-5" />
        <ul className="flex flex-col">
          {navLinks(user).map(({ label, icon: Icon, href }) => (
            <li key={label}>
              <Link
                onClick={() => setOpen(false)}
                href={href}
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: cn(
                    "w-full justify-start text-base!",
                    pathname === href && "bg-accent",
                  ),
                })}
              >
                <Icon className="size-5" />
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

"use client";
import { navLinks } from "@/constants";
import { useUser } from "@/providers/user-context-provider";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "../ui/button";

const NavLinks = () => {
  const pathname = usePathname();
  const { user } = useUser();
  return (
    <nav className="hidden sm:block">
      <ul className="flex">
        {navLinks(user).map(({ href, label }) => {
          const isActive = pathname === href;
          return (
            <li key={label} className="last:ml-auto">
              <Link
                href={href}
                className={buttonVariants({
                  variant: "navbar",
                })}
              >
                <span className="relative">
                  {label}
                  {isActive && (
                    <motion.span
                      layoutId="ActiveNavLink"
                      className="bg-primary absolute inset-x-0 -bottom-2 h-1 rounded-full"
                    />
                  )}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavLinks;

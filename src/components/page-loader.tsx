"use client"

import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({
    className,
} : PageLoaderProps) => {
  return (
     <div className={cn("h-main flex items-center justify-center", className)}>
        <Loader2 className="size-10 animate-spin text-primary" />
     </div>
    );
}

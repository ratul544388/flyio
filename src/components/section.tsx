import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export const Section = ({ title, className, children }: SectionProps) => {
  return (
    <Container elem="section" className={cn("py-10", className)}>
      {title && (
        <h2 className="mb-7 text-center text-3xl leading-12! font-bold opacity-80 sm:text-4xl sm:leading-14 md:text-5xl md:leading-16">
          {title}
        </h2>
      )}
      {children}
    </Container>
  );
};

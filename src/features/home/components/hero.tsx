"use client";

import Image from "next/image";
import heroImage from "@/../public/hero.webp";
import { Container } from "@/components/container";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] max-h-[600px]">
      <Image
        src={heroImage}
        alt="Hero"
        fill
        className="object-cover"
        placeholder="blur"
        priority
        sizes="100vw"
      />
      <Container className="relative flex-col z-10 flex justify-center items-start h-full text-white">
        <h1 className="max-w-lg text-5xl leading-[60px] font-bold">
          Book Flights with Ease on FLYIO
        </h1>
        <p className="mt-3 text-white/70 text-pretty max-w-lg">
          Discover and book the best flights at unbeatable prices across the
          globe — fast, secure, and hassle-free, with real-time updates and
          exclusive travel deals just for you.
        </p>
        <Link
          href="/flights"
          className={buttonVariants({ className: "mt-7 h-12 px-8!" })}
        >
          Search Flights
        </Link>
        <span className="mt-4 block text-white/70">Fast. Easy. Reliable.</span>
      </Container>
    </div>
  );
};

"use client";

import {
  Marquee,
  MarqueeItem,
  type MarqueePosition,
} from "@/components/marquee";
import { Section } from "@/components/section";
import { reviews } from "@/constants";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";

interface Review {
  id: string;
  username: string;
  image: string;
  comment: string;
}

const Testimonials = () => {
  const { data, isPending, isError } = useQuery<Review[]>({
    queryKey: ["reviews"],
    queryFn: async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=24");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const result: Review[] = data.results.map((r: any, i: number) => ({
        id: r.login.uuid,
        username: `@${r.name.first.toLowerCase()}_${r.name.last.toLowerCase()}`,
        image: r.picture.thumbnail,
        comment: reviews[i % reviews.length],
      }));

      return result;
    },
  });

  if (isError) return <p>Failed to load testimonials.</p>;

  return (
    <Section title="What Our Customers Say" className="mt-20">
      {isPending && <span className="loader mx-auto block" />}
      <Reviews reviews={data} slice={[1, 8]} />
      <Reviews reviews={data} slice={[9, 16]} position="right" />
      <Reviews reviews={data} slice={[17, 24]} />
    </Section>
  );
};

interface ReviewsProps {
  reviews?: Review[];
  slice: [number, number];
  position?: MarqueePosition;
}

const Reviews = ({ reviews, slice, position }: ReviewsProps) => {
  return (
    <Marquee position={position}>
      {reviews?.slice(...slice).map((user) => (
        <MarqueeItem
          key={user.id}
          className="bg-background hover:bg-primary/5 flex w-[300px] flex-col gap-5 rounded-lg border p-5 shadow-md transition-colors"
        >
          <p className="text-sm">{user.comment}</p>
          <div className="mt-auto flex items-center gap-3">
            <Image
              src={user.image}
              alt={user.username}
              height={40}
              width={40}
              sizes="40px"
              className="bg-accent rounded-full"
            />
            <p className="font-semibold">{user.username}</p>
          </div>
        </MarqueeItem>
      ))}
    </Marquee>
  );
};

export default Testimonials;

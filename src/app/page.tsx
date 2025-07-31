import { Hero } from "@/features/home/components/hero";
import Testimonials from "@/features/home/components/testimonials";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
  };
};

const Home = () => {
  return (
    <main>
      <Hero />
      <WhyChooseUs/>
      <Testimonials/>
    </main>
  );
};

export default Home;

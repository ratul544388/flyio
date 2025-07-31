import { Hero } from "@/features/home/components/hero";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Home",
  };
};

const Home = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;

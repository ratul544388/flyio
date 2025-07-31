import { Hero } from "@/features/home/components/hero";
import { Metadata } from "next";
import React from "react";

export const generateMetadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return <div>
    <Hero/>
  </div>;
};

export default Home;

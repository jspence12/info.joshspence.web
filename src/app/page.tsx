"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import About from "./ui/about/about";
import Footer from "./ui/nav/footer";

export default function Home() {
  return (
    <div className="w-full font-mono text-gray-200 justify-between max-h-screen h-screen flex flex-col">
      <Hero />
      <main className="ms-8 mb-auto grid grid-cols-2 gap-4 max-w-screen-3xl md:overflow-hidden h-full">
        <About />
        <WorkHistory jobs={workExperience} />
      </main>
    </div>
  );
}

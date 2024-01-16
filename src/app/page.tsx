"use client";
import WorkHistory from "./ui/work-history/work-history";
import React, { useState } from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import About from "./ui/about/about";

export default function Home() {
  const [isLoaded, setLoaded] = useState(false);
  return (
    <div className="w-full font-mono text-gray-200 max-h-screen h-screen flex flex-col">
      <Hero title="Josh Spence" subtitle="Software Engineer" />
      <div className="flex flex-row justify-center md:overflow-hidden">
        <main className="ms-8 mb-auto grid grid-cols-2 gap-4 max-w-screen-3xl h-full transition-all">
          <About />
          <WorkHistory jobs={workExperience} />
        </main>
      </div>
    </div>
  );
}

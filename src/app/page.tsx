"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import About from "./ui/about/about";

export default function Home() {
  return (
    <div className="w-full font-mono text-gray-200 max-h-screen h-screen flex flex-col">
      <Hero title="Josh Spence" subtitle="Software Engineer" />
      <div className="flex flex-row justify-center md:overflow-hidden from-zinc-800 to-zinc-900 bg-gradient-to-b">
        <main className="mb-auto grid grid-cols-2 gap-4 max-w-screen-3xl h-full transition-all md:divide-x divide-zinc-700">
          <About />
          <WorkHistory jobs={workExperience} />
        </main>
      </div>
    </div>
  );
}

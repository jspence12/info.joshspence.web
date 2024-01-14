"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import About from "./ui/about/about";
import Section from "./ui/common/section";

export default function Home() {
  return (
    <div className="w-full font-mono text-gray-200 justify-center">
      <Hero />
      <main className="mx-4 flex justify-center">
        <div className="grid grid-cols-2 m-6 gap-4 max-w-screen-3xl">
          <Section title="Hello World!">
            <About />
          </Section>
          <Section title="Experience">
            <WorkHistory jobs={workExperience} />
          </Section>
        </div>
      </main>
    </div>
  );
}

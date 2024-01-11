"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import ContactForm from "./ui/contact/contact-form";
import About from "./ui/about/about";
import Section from "./ui/common/section";

export default function Home() {
  return (
    <div className="bg-zinc-800 font-mono">
      <div className="w-full">
        <Hero />
        <main className="grid grid-cols-2 gap-8 m-8 max-md:m-2 bg">
          <div className="absolute bg-white w-60 h-40 z-0 -ms-1 -mt-1 rounded-" />
          <Section title="Hello World">
            <About />
          </Section>
          <Section title="Experience">
            <WorkHistory jobs={workExperience} />
          </Section>
          <Section title="Contact">
            <ContactForm />
          </Section>
        </main>
      </div>
    </div>
  );
}

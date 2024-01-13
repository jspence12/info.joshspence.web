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
    <div className="w-full font-mono text-gray-200">
      <Hero />
      <main className=" max-md:m-2">
        <div className="grid grid-cols-2 m-8">
          <Section title="Hello World!">
            <About />
          </Section>
          <Section title="Experience">
            <WorkHistory jobs={workExperience} />
          </Section>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-screen-md">
            <Section title="Contact">
              <ContactForm />
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
}

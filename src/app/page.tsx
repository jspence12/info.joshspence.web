"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import { workExperience } from "./lib/data/experience";
import ContactForm from "./ui/contact/contact-form";
import About from "./ui/about/about";

export default function Home() {
  return (
    <div>
      <div className="w-full">
        <Hero />
        <main className="grid grid-cols-2 gap-8 m-8">
          <div className="max-md:col-span-2">
            <About />
          </div>
          <div className="max-md:col-span-2">
            <WorkHistory jobs={workExperience} />
          </div>
          <div className="col-span-2">
            <ContactForm />
          </div>
        </main>
      </div>
    </div>
  );
}

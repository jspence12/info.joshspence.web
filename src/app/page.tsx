"use client";
import WorkHistory from "./ui/work-history/work-history";
import React from "react";
import Hero from "./ui/hero/hero";
import SideNav from "./ui/nav/side-nav/side-nav";
import { workExperience } from "./lib/data/experience";
import { records } from "./lib/data/nav-links";
import ContactForm from "./ui/contact/contact-form";

export default function Home() {
  return (
    <div className="flex">
      <SideNav navRecords={records} />
      <div className="w-full">
        <Hero />
        <main className="justify-center max-w-full">
          <WorkHistory jobs={workExperience} />
          <ContactForm />
        </main>
      </div>
    </div>
  );
}

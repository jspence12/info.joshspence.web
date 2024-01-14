import React from "react";

export interface SectionProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <>
      <section className={`max-md:col-span-2 font-bold`}>
        <h4 className="text-5xl ps-5 mb-2">{title}</h4>
        {children}
      </section>
    </>
  );
}

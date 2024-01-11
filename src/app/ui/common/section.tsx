export interface SectionProps {
  children: React.ReactElement | React.ReactElement[];
  title: string;
}

export default function Section({ children, title }: SectionProps) {
  return (
    <>
      <section
        className={`max-md:col-span-2 z-10 p-4 font-bold bg-zinc-800 text-gray-200`}
      >
        <h4 className="text-6xl ms-6 mb-2">{title}</h4>
        {children}
      </section>
    </>
  );
}

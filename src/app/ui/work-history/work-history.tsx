import Job from "@/app/lib/models/job";
import WorkHistoryItem from "./work-history-item";
import { useState } from "react";

export interface WorkHistoryProps {
  jobs: Job[];
}

export default function WorkHistory({ jobs }: WorkHistoryProps) {
  const [focusRow, setFocusRow] = useState("");

  const onPointerEnter = (company: string) => setFocusRow(company);
  const onPointerLeave = () => setFocusRow("");

  return (
    <section
      className="max-md:col-span-2 md:overflow-y-auto h-full py-6"
      aria-label="work experience"
    >
      <h4
        className={`transition duration-300 text-5xl ps-6 mb-2 font-bold text-yellow-100${
          focusRow ? " opacity-50" : ""
        }`}
      >
        Experience
      </h4>
      {jobs.map((job) => (
        <WorkHistoryItem
          job={job}
          key={job.company}
          isInFocus={focusRow == job.company}
          isAnyInFocus={focusRow !== ""}
          onPointerEnter={() => {
            onPointerEnter(job.company);
          }}
          onPointerLeave={onPointerLeave}
        />
      ))}
    </section>
  );
}

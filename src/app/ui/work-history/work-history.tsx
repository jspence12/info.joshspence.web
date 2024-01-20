import Job from "@/app/lib/models/job";
import WorkHistoryItem from "./work-history-item";
import { useState } from "react";

export interface WorkHistoryProps {
  jobs: Job[];
}

export default function WorkHistory({ jobs }: WorkHistoryProps) {
  const [focusRow, setFocusRow] = useState("");

  const onFocus = (company: string) => setFocusRow(company);
  const onBlur = () => setFocusRow("");

  return (
    <section
      className="max-md:col-span-2 md:overflow-y-auto h-full py-6"
      aria-label="work experience"
    >
      <h2
        className={`transition duration-300 ps-11 mb-2 ${
          focusRow && "opacity-50"
        }`}
      >
        Experience
      </h2>
      {jobs.map((job) => (
        <WorkHistoryItem
          job={job}
          key={job.company + job.title}
          isInFocus={focusRow == job.company}
          isAnyInFocus={focusRow !== ""}
          onFocus={() => {
            onFocus(job.company);
          }}
          onBlur={onBlur}
        />
      ))}
    </section>
  );
}

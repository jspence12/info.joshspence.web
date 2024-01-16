import Job from "@/app/lib/models/job";
import WorkHistoryItem from "./work-history-item";
import { useState } from "react";

export interface WorkHistoryProps {
  jobs: Job[];
}

export default function WorkHistory({ jobs }: WorkHistoryProps) {
  const [openItem, setOpenItem] = useState("");

  const onPointerEnter = (company: string) => setOpenItem(company);
  const onPointerLeave = () => setOpenItem("");

  return (
    <section
      className="max-md:col-span-2 md:overflow-y-auto h-full py-6"
      aria-label="work experience"
    >
      <h4 className="text-5xl ps-6 mb-2 font-bold">Experience</h4>
      {jobs.map((job) => (
        <WorkHistoryItem
          job={job}
          key={job.company}
          isInFocus={openItem == job.company}
          isAnyInFocus={openItem !== ""}
          onPointerEnter={() => {
            onPointerEnter(job.company);
          }}
          onPointerLeave={onPointerLeave}
        />
      ))}
    </section>
  );
}

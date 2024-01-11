import Job from "@/app/lib/models/job";
import WorkHistoryItem from "./work-history-item";
import { useState } from "react";

export interface WorkHistoryProps {
  jobs: Job[];
}

export default function WorkHistory({ jobs }: WorkHistoryProps) {
  const [openItem, setOpenItem] = useState("");

  const onItemClick = (selectedItem: string): void => {
    if (openItem === selectedItem) {
      setOpenItem("");
    } else {
      setOpenItem(selectedItem);
    }
  };

  return (
    <section className="w-full" id="Experience" aria-label="work experience">
      {jobs.map((job) => (
        <WorkHistoryItem
          job={job}
          key={job.company}
          isExpanded={openItem == job.company}
          onClick={() => {
            onItemClick(job.company);
          }}
        />
      ))}
    </section>
  );
}

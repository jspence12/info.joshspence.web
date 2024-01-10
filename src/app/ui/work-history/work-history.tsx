import Job from "@/app/lib/models/job";
import WorkHistoryItem from "./work-history-item";

export interface WorkHistoryProps {
  jobs: Job[];
}

export default function WorkHistory(props: WorkHistoryProps) {
  const { jobs } = { ...props };
  return (
    <section className="w-full" id="Experience" aria-label="work experience">
      <h2 className="text-6xl">Experience</h2>
      {jobs.map((job) => (
        <WorkHistoryItem job={job} key={job.company} />
      ))}
    </section>
  );
}

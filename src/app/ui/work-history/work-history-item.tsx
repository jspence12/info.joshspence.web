import Job from "@/app/lib/models/job";

export interface WorkHistoryItemProps {
  job: Job;
}

export default function WorkHistoryItem(props: WorkHistoryItemProps) {
  const { job } = { ...props };
  return (
    <article
      className="border-solid border-2 border-black"
      aria-label={`${job.company} experience`}
    >
      <header className="sticky top-0 bg-white">
        <div className="flex justify-between text-lg font-bold mx-4">
          <a href={job.url}>{job.company}</a>
          <h4 className="text-right">
            {job.startYear} - {job.endYear || "Present"}
          </h4>
        </div>
        <h5 className="text-center text-2xl font-bold mx-4">{job.title}</h5>
      </header>
      <ul className="m-4" aria-label={`${job.company} responsibilites`}>
        {job.responsibilites.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}

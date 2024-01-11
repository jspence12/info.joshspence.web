import Job from "@/app/lib/models/job";
import Chevron from "@/../public/chevron-up";
export interface WorkHistoryItemProps {
  job: Job;
  isExpanded: boolean;
  onClick: () => void;
}

export default function WorkHistoryItem({
  job,
  isExpanded,
  onClick,
}: WorkHistoryItemProps) {
  return (
    <article aria-label={`${job.company} experience`}>
      <button
        className="max-md:sticky max-md:top-0 cursor-pointer w-full text-start border-white border-2 rounded-md flex justify-between mb-2 bg-zinc-800"
        aria-expanded={isExpanded}
        onClick={onClick}
      >
        <div>
          <h5 className=" text-2xl mx-4 text-start">{job.title}</h5>
          <div className="flex text-lg flex-wrap">
            <h4 className="ms-4">{job.company}</h4>
            <h4 className="ms-4">
              {job.startYear} - {job.endYear || "Present"}
            </h4>
          </div>
        </div>
        <div
          className={`m-2 w-10 h-full ${
            isExpanded ? "rotate-180" : "rotate-0"
          }`}
        >
          <Chevron />
        </div>
      </button>
      <ul
        className={`m-4 ${!isExpanded && "hidden"}`}
        aria-label={`${job.company} responsibilites`}
        aria-hidden={!isExpanded}
      >
        {job.responsibilites.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}

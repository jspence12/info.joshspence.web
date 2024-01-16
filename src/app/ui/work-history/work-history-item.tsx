import Job from "@/app/lib/models/job";

export interface WorkHistoryItemProps {
  job: Job;
  isInFocus: boolean;
  isAnyInFocus: boolean;
  onPointerEnter: () => void;
  onPointerLeave: () => void;
}

export default function WorkHistoryItem({
  job,
  isInFocus,
  isAnyInFocus,
  onPointerEnter,
  onPointerLeave,
}: WorkHistoryItemProps) {
  const dateRange = `${job.startYear} - ${job.endYear || "Present"}`;

  const getFocusStyle = () => {
    if (isInFocus) {
      return "hover:border-gray-200 hover:text-gray-100 hover:bg-zinc-700";
    }
    if (isAnyInFocus) {
      return "border-zinc-700 text-gray-500";
    }
    return "border-zinc-700";
  };

  return (
    <article
      onPointerEnter={onPointerEnter}
      onFocus={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onBlur={onPointerLeave}
      aria-label={`${job.company} experience`}
      className={
        getFocusStyle() +
        " border hover:bg-blend-lighten transition-all duration-500 rounded-md m-2 me-4"
      }
    >
      <div className="flex text-lg flex-wrap justify-between">
        <a href={job.url}>
          <h4 className="mx-4 text-yellow-100 hover:text-xl transition-all duration-300 hover:text-yellow-50 ease-in">
            {job.company}
          </h4>
        </a>
        <h4 className="mx-4">{dateRange}</h4>
      </div>
      <h5 className=" text-2xl mx-4 text-start">{job.title}</h5>

      <ul className="p-4" aria-label={`${job.company} responsibilites`}>
        {job.responsibilites.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
    </article>
  );
}

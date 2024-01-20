import Job from "@/app/lib/models/job";
import Chip from "../common/chip";
import Link from "../common/icons/link-icon";

export interface WorkHistoryItemProps {
  job: Job;
  isInFocus: boolean;
  isAnyInFocus: boolean;
  onFocus: () => void;
  onBlur: () => void;
}

export default function WorkHistoryItem({
  job,
  isInFocus,
  isAnyInFocus,
  onFocus,
  onBlur,
}: WorkHistoryItemProps) {
  const dateRange = `${job.startYear} - ${job.endYear || "Present"}`;

  const getFocusStyle = () => {
    if (isInFocus) {
      return "hover:border-gray-200 hover:text-gray-100 hover:bg-zinc-700";
    }
    if (isAnyInFocus) {
      return "border-zinc-700 opacity-50";
    }
    return "border-zinc-700";
  };

  return (
    <article
      onPointerEnter={onFocus}
      onFocus={onFocus}
      onPointerLeave={onBlur}
      onBlur={onBlur}
      aria-label={`${job.company} experience`}
      className={
        getFocusStyle() +
        " border hover:bg-blend-lighten transition-all duration-500 rounded-md m-2 mx-4"
      }
    >
      <header className="mx-4">
        <div className="flex text-lg flex-wrap justify-between">
          <a
            href={job.url}
            className="text-yellow-100 hover:text-xl transition-all duration-300 hover:text-yellow-50 ease-in flex gap-1 align-middle"
          >
            {job.company}
            <span className="flex flex-col justify-center" aria-hidden={true}>
              <Link className="w-3 h-3" />
            </span>
          </a>
          <p>{dateRange}</p>
        </div>

        <h3 className="text-2xl">{job.title}</h3>
      </header>
      <ul className="p-4" aria-label={`${job.company} responsibilites`}>
        {job.responsibilites.map((responsibility, index) => (
          <li key={index}>{responsibility}</li>
        ))}
      </ul>
      <ul
        className="flex flex-wrap p-4 gap-2"
        aria-label={`${job.company} technologies`}
      >
        {job.technologies.map((technology) => (
          <li key={technology}>
            <Chip text={technology} />
          </li>
        ))}
      </ul>
    </article>
  );
}

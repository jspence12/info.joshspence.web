import { render } from "@testing-library/react";
import WorkHistoryItem from "./work-history-item";
import Job from "@/app/lib/models/job";

describe(WorkHistoryItem.name, () => {
  const setupJob = (): Job => ({
    title: "People Person",
    company: "Initech",
    responsibilites: [
      "I have people skills!",
      "I'm good. at dealing. with PEOPLE",
    ],
    startYear: 1999,
  });

  it.each([
    [2023, "2023"],
    [undefined, "Present"],
  ])(
    "renders job information",
    (endYear: number | undefined, rendered: string) => {
      const job: Job = { ...setupJob(), endYear };
      const sut = render(
        <WorkHistoryItem job={job} isExpanded={true} onClick={() => {}} />,
      );
      expect(sut.getByText(job.company)).toBeInTheDocument();
      expect(
        sut.getByText(`${job.startYear} - ${rendered}`),
      ).toBeInTheDocument(),
        job.responsibilites.forEach((responsibility) =>
          expect(sut.getByText(responsibility)).toBeInTheDocument(),
        );
    },
  );
});

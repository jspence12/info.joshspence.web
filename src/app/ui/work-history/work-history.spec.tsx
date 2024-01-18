import { render } from "@testing-library/react";
import WorkHistory from "./work-history";
import Job from "@/app/lib/models/job";

describe(WorkHistory.name, () => {
  const setupJob = (title: string): Job => ({
    title,
    company: "Initech",
    responsibilites: [
      "I have people skills!",
      "I'm good. at dealing. with PEOPLE",
    ],
    startYear: 1999,
    endYear: 2023,
    technologies: [],
  });

  it("renders all jobs", () => {
    const titles = ["senior", "mid", "junior"];
    const sut = render(
      <WorkHistory jobs={titles.map((title) => setupJob(title))} />,
    );
    titles.forEach((title) => expect(sut.getByText(title)).toBeInTheDocument());
  });
});

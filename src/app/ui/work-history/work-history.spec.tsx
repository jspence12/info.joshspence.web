import { fireEvent, render } from "@testing-library/react";
import WorkHistory from "./work-history";
import Job from "@/app/lib/models/job";
import { act } from "react-dom/test-utils";
import { testIds } from "./work-history-item";

describe(WorkHistory.name, () => {
  const setupJob = (title: string): Job => ({
    title,
    company: `${title}-company`,
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

  it("binds focus and blur listeners as expected", () => {
    const titles = ["1", "2"];
    const sut = render(
      <WorkHistory jobs={titles.map((title) => setupJob(title))} />,
    );
    const [firstJob, secondJob] = sut.getAllByTestId(testIds.workHistoryItem);

    // baseline
    expect(firstJob).not.toHaveClass("border-gray-200");
    expect(firstJob).not.toHaveClass("opacity-50");
    expect(secondJob).not.toHaveClass("border-gray-200");
    expect(secondJob).not.toHaveClass("opacity-50");

    // focus
    act(() => {
      fireEvent.focus(firstJob);
    });
    expect(firstJob).toHaveClass("border-gray-200");
    expect(firstJob).not.toHaveClass("opacity-50");
    expect(secondJob).not.toHaveClass("border-gray-200");
    expect(secondJob).toHaveClass("opacity-50");

    // blur
    act(() => {
      fireEvent.blur(firstJob);
    });
    expect(firstJob).not.toHaveClass("border-gray-200");
    expect(firstJob).not.toHaveClass("opacity-50");
    expect(secondJob).not.toHaveClass("border-gray-200");
    expect(secondJob).not.toHaveClass("opacity-50");
  });
});

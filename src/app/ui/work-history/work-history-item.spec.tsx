import { fireEvent, render } from "@testing-library/react";
import WorkHistoryItem, {
  WorkHistoryItemProps,
  testIds,
} from "./work-history-item";

describe(WorkHistoryItem.name, () => {
  const setupProps = (): WorkHistoryItemProps => ({
    job: {
      title: "People Person",
      company: "Initech",
      responsibilites: [
        "I have people skills!",
        "I'm good. at dealing. with PEOPLE",
      ],
      startYear: 1999,
      technologies: ["C++", "Java", "Python"],
    },
    isInFocus: false,
    isAnyInFocus: false,
    onFocus: () => {},
    onBlur: () => {},
  });

  it.each([
    [2023, "2023"],
    [undefined, "Present"],
  ])(
    "renders job information",
    (endYear: number | undefined, rendered: string) => {
      const props: WorkHistoryItemProps = setupProps();
      props.job.endYear = endYear;
      const sut = render(<WorkHistoryItem {...props} />);
      expect(sut.getByText(props.job.company)).toBeInTheDocument();
      expect(
        sut.getByText(`${props.job.startYear} - ${rendered}`),
      ).toBeInTheDocument();
      props.job.responsibilites.forEach((responsibility) =>
        expect(sut.getByText(responsibility)).toBeInTheDocument(),
      );
      props.job.technologies.forEach((technology) =>
        expect(sut.getByText(technology)).toBeInTheDocument(),
      );
    },
  );

  it("fires onFocus on pointer enter", () => {
    const onFocus = jest.fn();
    const props: WorkHistoryItemProps = { ...setupProps(), onFocus };
    const sut = render(<WorkHistoryItem {...props} />);
    fireEvent.pointerEnter(sut.getByTestId(testIds.workHistoryItem));
    expect(onFocus).toHaveBeenCalled();
  });

  it("fires onFocus on focus", () => {
    const onFocus = jest.fn();
    const props: WorkHistoryItemProps = { ...setupProps(), onFocus };
    const sut = render(<WorkHistoryItem {...props} />);
    fireEvent.focus(sut.getByTestId(testIds.workHistoryItem));
    expect(onFocus).toHaveBeenCalled();
  });

  it("fires onBlur on pointer leave", () => {
    const onBlur = jest.fn();
    const props: WorkHistoryItemProps = { ...setupProps(), onBlur };
    const sut = render(<WorkHistoryItem {...props} />);
    fireEvent.pointerLeave(sut.getByTestId(testIds.workHistoryItem));
    expect(onBlur).toHaveBeenCalled();
  });

  it("fires onBlur on blue", () => {
    const onBlur = jest.fn();
    const props: WorkHistoryItemProps = { ...setupProps(), onBlur };
    const sut = render(<WorkHistoryItem {...props} />);
    fireEvent.blur(sut.getByTestId(testIds.workHistoryItem));
    expect(onBlur).toHaveBeenCalled();
  });

  it("renders at half-opacity when not in focus and isAnyInFocus", () => {
    const props: WorkHistoryItemProps = { ...setupProps(), isAnyInFocus: true };
    const sut = render(<WorkHistoryItem {...props} />);
    expect(sut.getByTestId(testIds.workHistoryItem)).toHaveClass("opacity-50");
  });

  it("highlights when in focus", () => {
    const props: WorkHistoryItemProps = { ...setupProps(), isInFocus: true };
    const sut = render(<WorkHistoryItem {...props} />);
    expect(sut.getByTestId(testIds.workHistoryItem)).toHaveClass(
      "border-gray-200",
    );
  });

  it("renders at baseline when nothing is in focus", () => {
    const props: WorkHistoryItemProps = { ...setupProps() };
    const sut = render(<WorkHistoryItem {...props} />);
    expect(sut.getByTestId(testIds.workHistoryItem)).not.toHaveClass(
      "opacity-50",
    );
    expect(sut.getByTestId(testIds.workHistoryItem)).toHaveClass(
      "border-zinc-700",
    );
  });
});

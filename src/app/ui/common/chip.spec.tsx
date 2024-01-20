import { render } from "@testing-library/react";
import Chip from "./chip";

describe(Chip.name, () => {
  it("renders the chip name", () => {
    const text = "test";
    const sut = render(<Chip text={text} />);
    expect(sut.getByText(text)).toBeVisible();
  });
});

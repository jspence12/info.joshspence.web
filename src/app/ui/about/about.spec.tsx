import { fireEvent, render } from "@testing-library/react";
import About, { aboutTestIds } from "./about";

describe(About.name, () => {
  it("runs onClickContact when clicking the contact button", () => {
    const onClickContact = jest.fn(() => {});
    const sut = render(<About onClickContact={onClickContact} />);
    fireEvent.click(sut.getByText("Contact"));
    expect(onClickContact).toHaveBeenCalledTimes(1);
  });

  it("runs onClickContact when clicking the contact button", () => {
    const expectedYears = new Date().getFullYear() - 2019;
    const sut = render(<About onClickContact={() => {}} />);
    expect(sut.getByTestId(aboutTestIds.dynamicYear)).toHaveTextContent(
      `${expectedYears} years`,
    );
  });
});

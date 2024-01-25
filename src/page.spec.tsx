import { fireEvent, isInaccessible, render } from "@testing-library/react";
import Page from "./app/page";
import { act } from "react-dom/test-utils";
import { testIds as modalTestIds } from "./app/ui/common/modal";
import { sleep } from "./app/lib/util";
describe(Page.name, () => {
  it("renders the contact modal when the contact button is clicked", () => {
    const sut = render(<Page />);
    expect(sut.queryByRole("dialog")).toBeNull();
    expect(isInaccessible(sut.getByTestId("main-content"))).toBe(false);
    act(() => fireEvent.click(sut.getByText("Contact")));
    expect(sut.getByRole("dialog")).toBeVisible();
    expect(isInaccessible(sut.getByTestId("main-content"))).toBe(true);
  });

  it("closes the contact modal when exiting the contact modal", async () => {
    const sut = render(<Page />);
    act(() => fireEvent.click(sut.getByText("Contact")));
    expect(sut.getByRole("dialog")).toBeVisible();
    await act(async () => {
      fireEvent.click(sut.getByTestId(modalTestIds.close));
      await sleep(330);
    });

    expect(sut.queryByRole("dialog")).toBeNull();
    expect(isInaccessible(sut.getByTestId("main-content"))).toBe(false);
  });
});

import { fireEvent, render } from "@testing-library/react";
import ContactModal from "./contact-modal";

describe(ContactModal.name, () => {
  it("fires onClose when clicking cancel", () => {
    const onClose = jest.fn();
    const sut = render(<ContactModal onClose={onClose} />);
    fireEvent.click(sut.getByText("Cancel"));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

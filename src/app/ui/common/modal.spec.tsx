import { fireEvent, render } from "@testing-library/react";
import Modal, { ModalProps, testIds } from "./modal";
import { sleep } from "@/app/lib/util";
import { act } from "react-dom/test-utils";

describe(Modal.name, () => {
  const getProps = (): ModalProps => ({
    title: "War and Peace",
    children: <></>,
    onClose: () => {},
  });

  it("displays the title and children", () => {
    const childText = "hello";
    const props = getProps();
    props.children = <p>{childText}</p>;

    const sut = render(<Modal {...props} />);
    expect(sut.getByText(childText)).toBeVisible();
    expect(sut.getByText(props.title)).toBeVisible();
  });

  it("runs onClose when the close button is clicked after allowing background to fade", async () => {
    const onClose = jest.fn();
    const props: ModalProps = { ...getProps(), onClose };

    const sut = render(<Modal {...props} />);

    expect(onClose).not.toHaveBeenCalled();
    expect(sut.getByTestId(testIds.overlay)).toHaveClass("opacity-50");
    expect(sut.getByTestId(testIds.modal)).toHaveClass("opacity-100");
    expect(sut.getByTestId(testIds.modal)).toHaveClass("transition");

    act(() => {
      fireEvent.click(sut.getByRole("button"));
    });

    expect(onClose).not.toHaveBeenCalled();
    expect(sut.getByTestId(testIds.overlay)).toHaveClass("opacity-0");
    expect(sut.getByTestId(testIds.modal)).toHaveClass("opacity-0");
    await sleep(310);

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

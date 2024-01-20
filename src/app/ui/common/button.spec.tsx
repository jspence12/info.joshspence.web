import { fireEvent, render } from "@testing-library/react";
import Button, { ButtonProps } from "./button";
import "@testing-library/jest-dom";

describe(Button.name, () => {
  const generateButtonProps = (): ButtonProps => ({
    text: "test",
  });

  it("performs onClick when clicked", () => {
    const onClick = jest.fn();
    const props: ButtonProps = {
      ...generateButtonProps(),
      onClick,
    };

    const sut = render(<Button {...props} />).getByText(props.text);
    fireEvent.click(sut);
    expect(onClick).toHaveBeenCalled();
  });

  it("disables the button with the disable prop", () => {
    const props: ButtonProps = {
      ...generateButtonProps(),
      disabled: true,
    };

    const sut = render(<Button {...props} />).getByText(props.text);
    expect(sut.tabIndex).toBeLessThan(0);
    expect(sut).toHaveAttribute("aria-disabled", "true");
  });

  it.each([undefined, false])(
    "enables the button when disabledProp is not true",
    (disabled) => {
      const props: ButtonProps = {
        ...generateButtonProps(),
        disabled,
      };
      const sut = render(<Button {...props} />).getByText(props.text);
      expect(sut.tabIndex).toBe(0);
      expect(sut).not.toHaveAttribute("aria-disabled", "true");
    },
  );

  it("has button role with no href", () => {
    const props: ButtonProps = {
      ...generateButtonProps(),
    };
    const sut = render(<Button {...props} />).getByText(props.text);
    expect(sut).toHaveAttribute("role", "button");
    expect(sut).not.toHaveAttribute("target");
  });

  it("has link role with href", () => {
    const props: ButtonProps = {
      ...generateButtonProps(),
      href: "https://homestarrunner.com",
    };
    const sut = render(<Button {...props} />).getByText(props.text);
    expect(sut).toHaveAttribute("role", "link");
    expect(sut).toHaveAttribute("target", "_blank");
  });

  it("does not have a target when referencing an id", () => {
    const props: ButtonProps = {
      ...generateButtonProps(),
      href: "#important-videos",
    };
    const sut = render(<Button {...props} />).getByText(props.text);
    expect(sut).not.toHaveAttribute("target");
  });
});

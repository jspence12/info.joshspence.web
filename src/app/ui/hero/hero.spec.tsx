import { render } from "@testing-library/react";
import Hero, { HeroProps } from "./hero";
import { act } from "react-dom/test-utils";
import { sleep } from "@/app/lib/util";

describe(Hero.name, () => {
  it.skip("prints in the name on load", async () => {
    const props: HeroProps = {
      title: "Foo",
      subtitle: "Bar",
    };

    const sut = render(<Hero {...props} />);
    expect(sut.queryByText(props.title)).toBeNull();
    expect(sut.getByText(props.subtitle)).toHaveClass("invisible");

    await act(async () => await sleep(3000));

    expect(sut.getByText(props.title)).toBeVisible();
    expect(sut.getByText(props.subtitle)).not.toHaveClass("invisible");
  });
});

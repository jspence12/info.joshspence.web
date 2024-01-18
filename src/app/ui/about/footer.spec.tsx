import Footer from "./footer";
import { render } from "@testing-library/react";

describe(Footer.name, () => {
  it("renders the expected date", () => {
    const year = new Date().getFullYear();
    const sut = render(<Footer />);
    expect(sut.getByText(`© ${year} Josh Spence`)).toBeInTheDocument();
  });
});

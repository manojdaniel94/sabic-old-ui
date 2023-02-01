import React from "react";
import { render, cleanup } from "@testing-library/react";
import Footer from "../Components/Footer";

afterEach(cleanup);

describe("Footer component", () => {
  it("renders the copyright text", () => {
    const { getByText } = render(<Footer />);
    const copyrightText = getByText(
      /^\u00A9 2023 Saudi Basic Industries Corporation \(SABIC\), All Rights Reserved./
    );
    expect(copyrightText).toBeInTheDocument();
  });
});

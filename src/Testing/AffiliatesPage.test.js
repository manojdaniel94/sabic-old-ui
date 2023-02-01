import React from "react";
import { render } from "@testing-library/react";
import Affiliates from "../pages/Affiliates";

test("renders affiliates container", () => {
  const { getByTestId } = render(<Affiliates />);
  const container = getByTestId("affiliates-container");
  expect(container).toBeInTheDocument();
});

import React from "react";
import { render } from "@testing-library/react";
import Plant from "../pages/Plant";

describe("Plant component", () => {
  test("Plant component renders the AffiliatesBreadCrumb component", () => {
    const { getByText } = render(<Plant />);
    const text = getByText("Affiliates");
    expect(text).toBeInTheDocument();
  });

  it("renders the Status component", () => {
    const { getByTestId } = render(<Plant />);
    const status = getByTestId("status");
    expect(status).toBeInTheDocument();
  });

  it("renders the Affiliates component", () => {
    const { getByTestId } = render(<Plant />);
    const affiliates = getByTestId("affiliates");
    expect(affiliates).toBeInTheDocument();
  });

  it("renders the HealthIndex component", () => {
    const { getByTestId } = render(<Plant />);
    const healthIndex = getByTestId("health-index");
    expect(healthIndex).toBeInTheDocument();
  });
});

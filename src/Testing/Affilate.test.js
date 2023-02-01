import React from "react";
import { render } from "@testing-library/react";
import Affiliate from "../Components/PlantComponent/Affiliate";

describe("Affiliate component", () => {
  it("renders all the elements correctly", () => {
    const { getByText } = render(<Affiliate />);

    expect(getByText("OLF 1")).toBeInTheDocument();
    expect(getByText("HEALTH INDEX")).toBeInTheDocument();
    expect(getByText("29%")).toHaveClass("green");
    expect(getByText("PM COMPLIANCE")).toBeInTheDocument();
    expect(getByText("70%")).toHaveClass("blue");
    expect(getByText("ACTIVE ALERTS")).toBeInTheDocument();
    expect(getByText("87")).toHaveClass("red");
    expect(getByText("UNDER INVESTIGATION")).toBeInTheDocument();
    expect(getByText("1")).toHaveClass("blue");
    expect(getByText("OVERDUE INVESTIGATION")).toBeInTheDocument();
    expect(getByText("86")).toHaveClass("red");
  });
});

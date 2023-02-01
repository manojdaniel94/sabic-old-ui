import React from "react";
import { render, screen } from "@testing-library/react";
import HealthIndex from "../Components/PlantComponent/HealthIndex";

describe("HealthIndex", () => {
  it("renders the correct content", () => {
    render(<HealthIndex />);

    expect(screen.getByText("HEALTH INDEX")).toBeInTheDocument();
    expect(screen.getByText("OLF 1")).toBeInTheDocument();
    expect(screen.getByText("OLF 2")).toBeInTheDocument();
    expect(screen.getByText("OLF 3")).toBeInTheDocument();
  });
});

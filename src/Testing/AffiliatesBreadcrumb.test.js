import React from "react";
import { render, screen } from "@testing-library/react";
import AffiliatesBreadCrumb from "../Components/AffiliatesPage/AffiliatesBreadCrumb";

describe("AffiliatesBreadCrumb component", () => {
  it("renders breadcrumb correctly", () => {
    render(<AffiliatesBreadCrumb />);

    const sabicLink = screen.getByText("SABIC");
    expect(sabicLink).toHaveAttribute("href", "#");

    const allRegionsLink = screen.getByText("All Regions");
    expect(allRegionsLink).toHaveAttribute("href", "#");

    const affiliatesLink = screen.getByText("affiliates");
    expect(affiliatesLink).toHaveAttribute("href", "#");
    expect(affiliatesLink).toHaveClass("active");
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Header from "../Components/Header";

describe("Header", () => {
  it("should render the correct date filter options", () => {
    const { getByText } = render(<Header />);
    const dateFilterList = ["1D", "1W", "1M", "3M", "1Y", "5Y", "CUS"];
    dateFilterList.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it('should enable the custom date picker when "CUS" is clicked', () => {
    const { getByText, getByTestId } = render(<Header />);
    fireEvent.click(getByText("CUS"));
    expect(getByTestId("custom-date-picker")).toBeEnabled();
  });
});

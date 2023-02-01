import { render, fireEvent } from "@testing-library/react";
import PlantPopup from "../Components/Popup/PlantPopup";

describe("PlantPopup", () => {
  it("renders the affiliate options", () => {
    const { getByText } = render(<PlantPopup />);
    expect(getByText("Affiliates")).toBeInTheDocument();
    // Assert that the options from affiliateList are rendered in the select element
  });

  it("calls setData with true on mouse over", () => {
    const setData = jest.fn();
    const { getByText } = render(<PlantPopup setData={setData} />);
    fireEvent.mouseOver(getByText("Affiliates"));
    expect(setData).toHaveBeenCalledWith(true);
  });

  it("calls setData with false on mouse out", () => {
    const setData = jest.fn();
    const { getByText } = render(<PlantPopup setData={setData} />);
    fireEvent.mouseOut(getByText("Affiliates"));
    expect(setData).toHaveBeenCalledWith(false);
  });
});

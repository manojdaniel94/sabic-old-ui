import { render, fireEvent, waitFor } from "@testing-library/react";
import AssetsPopup from "../Components/Popup/AssetsPopup";

describe("AssetsPopup", () => {
  it("renders the affiliate options", () => {
    const { getByText } = render(<AssetsPopup />);
    expect(getByText("Affiliates")).toBeInTheDocument();
    // Assert that the options from affiliateList are rendered in the select element
  });

  it("calls setData with true on mouse over", () => {
    const setData = jest.fn();
    const { getByText } = render(<AssetsPopup setData={setData} />);
    fireEvent.mouseOver(getByText("Affiliates"));
    expect(setData).toHaveBeenCalledWith(true);
  });

  it("calls setData with false on mouse out", () => {
    const setData = jest.fn();
    const { getByText } = render(<AssetsPopup setData={setData} />);
    fireEvent.mouseOut(getByText("Affiliates"));
    expect(setData).toHaveBeenCalledWith(false);
  });
});

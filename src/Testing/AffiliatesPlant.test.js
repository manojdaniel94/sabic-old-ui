import React from "react";
import { render, cleanup } from "@testing-library/react";
import Affiliates from "../Components/PlantComponent/Affiliates";
import { data } from "../DataModel/data";

afterEach(cleanup);

describe("Affiliates component", () => {
  it("renders without crashing", () => {
    const { asFragment } = render(<Affiliates />);
    expect(asFragment()).toMatchSnapshot();
  });

  {
    /*} it("renders the data correctly", () => {
    const { getByText, getByAltText } = render(<Affiliates />);
    const firstData = data[0];
    const name = getByText(firstData.name);
    const image = getByAltText(firstData.name);

    expect(name).toBeInTheDocument();
    expect(image).toHaveAttribute("src", firstData.image);
  });*/
  }
});

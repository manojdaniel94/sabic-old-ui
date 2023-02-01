import React from "react";
import { render } from "@testing-library/react";
import AffiliatesStatus from "../Components/PlantComponent/Status";

test("AffiliatesStatus component should render all the elements correctly", () => {
  const { getByText } = render(<AffiliatesStatus />);

  const affiliates = getByText("AFFILIATES");
  expect(affiliates).toBeInTheDocument();

  const assets = getByText("ASSETS");
  expect(assets).toBeInTheDocument();

  const healthIndex = getByText("HEALTH INDEX");
  expect(healthIndex).toBeInTheDocument();

  const alerts = getByText("ALERTS");
  expect(alerts).toBeInTheDocument();

  const inProgress = getByText("IN PROGRESS");
  expect(inProgress).toBeInTheDocument();

  const overdue = getByText("OVERDUE");
  expect(overdue).toBeInTheDocument();

  const closed = getByText("CLOSED");
  expect(closed).toBeInTheDocument();
});

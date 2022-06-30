import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Given component App", () => {
  render(<App />);
  test("Then should have App title", () => {
    const linkElement = screen.getByText(/The pointing gentlemen/i);
    expect(linkElement).toBeInTheDocument();
  });
});

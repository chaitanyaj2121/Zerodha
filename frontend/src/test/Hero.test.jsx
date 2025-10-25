import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

// Test Suite - multiple test cases at once we can run

describe("Hero Component", () => {
  test("Renders Hero Image", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("home Hero image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "./media/images/homeHero.png");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  it("should render Hello with name when name is provided", () => {
    render(<Greet name="Yohannes" />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/yohannes/i);
  });

  it("should render login button when name is not provided", () => {
    render(<Greet />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/login/i);
  });
});

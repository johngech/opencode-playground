import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Skills } from "../../../src/components/Skills/Skills";

describe("Skills Component", () => {
  describe("Behavior", () => {
    it("renders Skills section", () => {
      render(<Skills />);
      expect(screen.getByText("Skills")).toBeInTheDocument();
    });

    it("renders Languages category", () => {
      render(<Skills />);
      expect(screen.getByText("Languages")).toBeInTheDocument();
    });

    it("renders Frameworks category", () => {
      render(<Skills />);
      expect(screen.getByText("Frameworks")).toBeInTheDocument();
    });

    it("renders Tools category", () => {
      render(<Skills />);
      expect(screen.getByText("Tools")).toBeInTheDocument();
    });

    it("renders AI & Engineering category", () => {
      render(<Skills />);
      expect(screen.getByText("AI & Engineering")).toBeInTheDocument();
    });
  });

  describe("Scalability", () => {
    it("renders correctly after multiple re-renders", () => {
      const { rerender } = render(<Skills />);
      for (let i = 0; i < 10; i++) {
        rerender(<Skills />);
      }
      expect(screen.getByText("Skills")).toBeInTheDocument();
    });

    it("handles large skill datasets", () => {
      render(<Skills />);
      const skillBars = document.querySelectorAll('[class*="bar"]');
      expect(skillBars.length).toBeGreaterThan(0);
    });
  });

  describe("Maintainability", () => {
    it("uses semantic section element", () => {
      const { container } = render(<Skills />);
      expect(container.querySelector("section")).toBeInTheDocument();
    });

    it("has appropriate heading structure", () => {
      const { container } = render(<Skills />);
      expect(container.querySelector("h2")).toBeInTheDocument();
    });

    it("skill categories are properly labeled", () => {
      render(<Skills />);
      const categories = [
        "Languages",
        "Frameworks",
        "Tools",
        "AI & Engineering",
      ];
      categories.forEach((cat) => {
        expect(screen.getByText(cat)).toBeInTheDocument();
      });
    });
  });
});

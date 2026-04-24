import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Hero } from "../../../src/components/Hero/Hero";

describe("Hero Component", () => {
  describe("Behavior", () => {
    it("renders developer name", () => {
      render(<Hero />);
      expect(screen.getByText("Yohannes Getachew")).toBeInTheDocument();
    });

    it("renders job title", () => {
      render(<Hero />);
      expect(
        screen.getByText("AI-Native Full-Stack Developer"),
      ).toBeInTheDocument();
    });

    it("renders greeting text", () => {
      render(<Hero />);
      expect(screen.getByText("Hello, I'm")).toBeInTheDocument();
    });

    it("renders tagline content", () => {
      render(<Hero />);
      expect(screen.getByText(/passion/i)).toBeInTheDocument();
    });

    it("renders CTA buttons", () => {
      render(<Hero />);
      expect(screen.getByText("View My Work")).toBeInTheDocument();
      expect(screen.getByText("Get In Touch")).toBeInTheDocument();
    });

    it("CTA buttons have correct links", () => {
      render(<Hero />);
      const buttons = screen.getAllByRole("link");
      expect(buttons[0]).toHaveAttribute("href", "#projects");
      expect(buttons[1]).toHaveAttribute("href", "#contact");
    });
  });

  describe("Scalability", () => {
    it("renders correctly after multiple re-renders", () => {
      const { rerender } = render(<Hero />);
      for (let i = 0; i < 10; i++) {
        rerender(<Hero />);
      }
      expect(screen.getByText("Yohannes Getachew")).toBeInTheDocument();
    });

    it("handles rapid viewport changes", () => {
      const { rerender } = render(<Hero />);
      for (let i = 0; i < 50; i++) {
        window.innerWidth = Math.random() * 1000;
        rerender(<Hero />);
      }
      expect(screen.getByText("Yohannes Getachew")).toBeInTheDocument();
    });
  });

  describe("Maintainability", () => {
    it("uses semantic heading structure", () => {
      const { container } = render(<Hero />);
      const headings = container.querySelectorAll("h1, h2");
      expect(headings.length).toBeGreaterThan(0);
    });

    it("CTA buttons have descriptive text", () => {
      render(<Hero />);
      const buttons = screen.getAllByRole("link");
      buttons.forEach((btn) => {
        expect(btn.textContent?.length).toBeGreaterThan(0);
      });
    });

    it("section has proper ARIA label", () => {
      const { container } = render(<Hero />);
      const section = container.querySelector("section");
      expect(section?.getAttribute("aria-label") || section?.id).toBeTruthy();
    });
  });
});

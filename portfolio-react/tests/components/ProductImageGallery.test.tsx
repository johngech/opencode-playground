import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ProductImageGallery from "../../src/components/ProductImageGallery";

describe("ProductImageGallery", () => {
  it("should render nothing if given an empty array", () => {
    const { container } = render(<ProductImageGallery imageUris={[]} />);

    expect(container).toBeEmptyDOMElement();
  });

  it("should render a list of images", () => {
    const imageUris = ["a.jpg", "b.png", "c.gif"];

    render(<ProductImageGallery imageUris={imageUris} />);
    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(3);
    imageUris.forEach((uri, index) => {
      expect(images[index]).toHaveAttribute("src", uri);
    });
  });
});

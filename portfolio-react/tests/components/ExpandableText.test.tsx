import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExpandableText from "../../src/components/ExpandableText";
import userEvent from "@testing-library/user-event";

describe("ExpandableText", () => {
  it("should render short text without a button", () => {
    render(<ExpandableText text="Short text" />);

    const article = screen.getByRole("article");

    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(/short/i);

    const button = screen.queryByRole("button");
    expect(button).not.toBeInTheDocument();
  });

  it("should render the text and button with its initial state", () => {
    const longText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid, repellat excepturi sit laudantium illum in soluta vel quasi asperiores molestias magni, voluptate nisi alias debitis beatae et odio voluptatem! Sapiente harum quaerat sunt expedita magni officiis nihil rerum velit optio iste aliquam pariatur reiciendis aperiam libero, molestiae placeat dolorum?";
    render(<ExpandableText text={longText} />);

    const article = screen.getByRole("article");
    expect(article).toBeInTheDocument();
    expect(article).toHaveTextContent(/.../i);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/more/i);
  });

  it("should render the whole text when it is expanded", async () => {
    const longText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae aliquid, repellat excepturi sit laudantium illum in soluta vel quasi asperiores molestias magni, voluptate nisi alias debitis beatae et odio voluptatem! Sapiente harum quaerat sunt expedita magni officiis nihil rerum velit optio iste aliquam pariatur reiciendis aperiam libero, molestiae placeat dolorum?";
    render(<ExpandableText text={longText} />);

    const button = screen.getByRole("button");
    const event = userEvent.setup();
    await event.click(button);

    expect(button).toHaveTextContent(/less/i);

    // const article = screen.getByRole("article");
    // expect(article).not.toHaveTextContent(/.../i);
  });
});

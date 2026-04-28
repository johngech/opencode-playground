import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserAccount from "../../src/components/UserAccount";
import type { User } from "../../src/types/entities";

describe("UserAccount", () => {
  it("should render user name", () => {
    const user: User = { id: 1, name: "Yohannes" };

    render(<UserAccount user={user} />);

    expect(screen.getByText(user.name)).toBeInTheDocument();
  });

  it("should render the edit button if user is admin", () => {
    const user: User = { id: 1, name: "Yohannes", isAdmin: true };
    
    render(<UserAccount user={user} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  it("should not render the edit button if user is not admin", () => {
    const user: User = { id: 1, name: "Yohannes" };

    render(<UserAccount user={user} />);
    const button = screen.queryByRole("button");

    expect(button).not.toBeInTheDocument();
  });
});

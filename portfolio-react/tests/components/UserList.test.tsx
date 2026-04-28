import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UserList from "../../src/components/UserList";
import type { User } from "../../src/types/entities";

describe("UserList", () => {
  it("should render no users when users array is empty", () => {
    render(<UserList users={[]} />);

    const text = screen.getByText(/no users/i);

    expect(text).toBeInTheDocument();
  });

  it("should render a list of users", () => {
    const users: User[] = [
      { id: 1, name: "Yohannes" },
      { id: 2, name: "Dereje" },
    ];
    render(<UserList users={users} />);

    users.forEach((user) => {
      const link = screen.getByRole("link", { name: user.name });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", `/users/${user.id}`);
    });
  });
});

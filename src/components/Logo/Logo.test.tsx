import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Logo from "./Logo";

describe("Logo", () => {
  it("renders the header variant by default", () => {
    const { container } = render(<Logo />);
    const rect = container.querySelector("rect");
    expect(rect).toHaveAttribute("fill", "#000000");
  });

  it("renders the about variant", () => {
    const { container } = render(<Logo variant="about" />);
    const rect = container.querySelector("rect");
    expect(rect).toHaveAttribute("fill", "rgba(255, 255, 255, 0.1)");
  });

  it("applies the given className", () => {
    const { container } = render(<Logo className="logo-icon" />);
    expect(container.querySelector("svg")).toHaveClass("logo-icon");
  });
});

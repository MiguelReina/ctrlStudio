import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/render";
import Contact from "./Contact";

describe("Contact", () => {
  it("renders the contact details", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByText("0963169401")).toBeInTheDocument();
    expect(
      screen.getByText("miguel_rg_esteban@hotmail.com"),
    ).toBeInTheDocument();
  });

  it("renders the contact form", () => {
    renderWithProviders(<Contact />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
  });

  it("has the anchor id used by the navigation", () => {
    const { container } = renderWithProviders(<Contact />);
    expect(container.querySelector("#contacto")).toBeInTheDocument();
  });
});

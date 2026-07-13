import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/render";
import Header from "./Header";

describe("Header", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("renders the brand name", () => {
    renderWithProviders(<Header />);
    expect(screen.getByText("CTRL STUDIO")).toBeInTheDocument();
  });

  it("renders navigation links to each section", () => {
    renderWithProviders(<Header />);
    expect(screen.getByRole("link", { name: "Servicios" })).toHaveAttribute(
      "href",
      "#servicios",
    );
    expect(screen.getByRole("link", { name: "Proyectos" })).toHaveAttribute(
      "href",
      "#proyectos",
    );
    expect(screen.getByRole("link", { name: "Nosotros" })).toHaveAttribute(
      "href",
      "#nosotros",
    );
    expect(screen.getByRole("link", { name: "Contacto" })).toHaveAttribute(
      "href",
      "#contacto",
    );
  });

  it("translates the navigation when the language changes", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Header />);

    await user.click(screen.getByRole("button", { name: "Cambiar a inglés" }));

    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Projects" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "About" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });
});

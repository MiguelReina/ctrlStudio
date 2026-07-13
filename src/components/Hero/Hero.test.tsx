import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import Hero from "./Hero";

describe("Hero", () => {
  it("renders the main heading", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByRole("heading", { level: 1, name: "CTRL STUDIO" }),
    ).toBeInTheDocument();
  });

  it("renders the call to action linking to the contact section", () => {
    renderWithProviders(<Hero />);
    expect(
      screen.getByRole("link", { name: dictionaries.es.hero.cta }),
    ).toHaveAttribute("href", "#contacto");
  });
});

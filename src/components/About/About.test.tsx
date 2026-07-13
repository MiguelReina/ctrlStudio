import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import About from "./About";

describe("About", () => {
  it("renders the section heading", () => {
    renderWithProviders(<About />);
    expect(
      screen.getByRole("heading", { name: dictionaries.es.about.title }),
    ).toBeInTheDocument();
  });

  it("renders every feature", () => {
    renderWithProviders(<About />);
    for (const feature of dictionaries.es.about.features) {
      expect(screen.getByText(feature)).toBeInTheDocument();
    }
  });

  it("has the anchor id used by the navigation", () => {
    const { container } = renderWithProviders(<About />);
    expect(container.querySelector("#nosotros")).toBeInTheDocument();
  });
});

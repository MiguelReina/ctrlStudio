import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import Services from "./Services";

describe("Services", () => {
  it("renders one card per service", () => {
    renderWithProviders(<Services />);
    for (const service of dictionaries.es.services.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: service.title }),
      ).toBeInTheDocument();
      expect(screen.getByText(service.description)).toBeInTheDocument();
    }
  });

  it("has the anchor id used by the navigation", () => {
    const { container } = renderWithProviders(<Services />);
    expect(container.querySelector("#servicios")).toBeInTheDocument();
  });
});

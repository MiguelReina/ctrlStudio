import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import Footer from "./Footer";
import { getCopyright } from "./helpers";

describe("Footer", () => {
  it("renders the copyright with the current year", () => {
    renderWithProviders(<Footer />);
    expect(
      screen.getByText(
        getCopyright(new Date().getFullYear(), dictionaries.es.footer.rights),
      ),
    ).toBeInTheDocument();
  });
});

describe("getCopyright", () => {
  it("includes the given year and rights text", () => {
    expect(getCopyright(2026, "Todos los derechos reservados.")).toBe(
      "© 2026 CTRL Studio. Todos los derechos reservados.",
    );
  });
});

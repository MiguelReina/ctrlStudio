import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/render";
import LanguageToggle from "./LanguageToggle";

describe("LanguageToggle", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("shows Spanish as the default language", () => {
    renderWithProviders(<LanguageToggle />);
    expect(screen.getByRole("button")).toHaveTextContent("ES");
  });

  it("switches to English on click and persists the choice", async () => {
    const user = userEvent.setup();
    renderWithProviders(<LanguageToggle />);

    await user.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toHaveTextContent("EN");
    expect(localStorage.getItem("locale")).toBe("en");
  });
});

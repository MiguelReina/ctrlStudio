import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "vitest";
import { renderWithProviders } from "@/test/render";
import SettingsMenu from "./SettingsMenu";

describe("SettingsMenu", () => {
  afterEach(() => {
    localStorage.clear();
  });

  it("hides the modal until the trigger is clicked", () => {
    renderWithProviders(<SettingsMenu />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("opens the modal with language and theme controls", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SettingsMenu />);

    await user.click(screen.getByRole("button", { name: "Abrir configuración" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cambiar a inglés" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Activar modo oscuro" }),
    ).toBeInTheDocument();
  });

  it("closes the modal from the close button", async () => {
    const user = userEvent.setup();
    renderWithProviders(<SettingsMenu />);

    await user.click(screen.getByRole("button", { name: "Abrir configuración" }));
    await user.click(screen.getByRole("button", { name: "Cerrar configuración" }));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});

import { afterEach, describe, expect, it, vi } from "vitest";
import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import ContactForm from "./ContactForm";

describe("ContactForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders the three fields", () => {
    renderWithProviders(<ContactForm />);
    expect(screen.getByLabelText("Nombre")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Mensaje")).toBeInTheDocument();
  });

  it("shows a confirmation and resets the form on submit", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Email"), "ana@example.com");
    await user.type(screen.getByLabelText("Mensaje"), "Hola");
    await user.click(
      screen.getByRole("button", { name: dictionaries.es.form.submit }),
    );

    await waitFor(() => {
      expect(fetchSpy).toHaveBeenCalledOnce();
    });
    expect(alertSpy).toHaveBeenCalledWith(dictionaries.es.form.confirmation);
    expect(screen.getByLabelText("Nombre")).toHaveValue("");
  });

  it("shows an error when submission fails", async () => {
    vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: false,
      status: 500,
    } as Response);
    const alertSpy = vi.spyOn(window, "alert").mockImplementation(() => {});
    const user = userEvent.setup();
    renderWithProviders(<ContactForm />);

    await user.type(screen.getByLabelText("Nombre"), "Ana");
    await user.type(screen.getByLabelText("Email"), "ana@example.com");
    await user.type(screen.getByLabelText("Mensaje"), "Hola");
    await user.click(
      screen.getByRole("button", { name: dictionaries.es.form.submit }),
    );

    await waitFor(() => {
      expect(alertSpy).toHaveBeenCalledWith(dictionaries.es.form.error);
    });
  });
});

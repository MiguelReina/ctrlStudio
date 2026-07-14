import emailjs from "@emailjs/browser";
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
    const sendSpy = vi
      .spyOn(emailjs, "send")
      .mockResolvedValue({ status: 200, text: "OK" });
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
      expect(sendSpy).toHaveBeenCalledOnce();
    });
    expect(alertSpy).toHaveBeenCalledWith(dictionaries.es.form.confirmation);
    expect(screen.getByLabelText("Nombre")).toHaveValue("");
  });

  it("ignores bot submissions from the honeypot field", async () => {
    const sendSpy = vi
      .spyOn(emailjs, "send")
      .mockResolvedValue({ status: 200, text: "OK" });
    const user = userEvent.setup();
    const { container } = renderWithProviders(<ContactForm />);

    await user.type(screen.getByLabelText("Nombre"), "Bot");
    await user.type(screen.getByLabelText("Email"), "bot@example.com");
    await user.type(screen.getByLabelText("Mensaje"), "Spam");

    const honeypot = container.querySelector(
      'input[name="company"]',
    ) as HTMLInputElement;
    honeypot.value = "Acme Inc";

    await user.click(
      screen.getByRole("button", { name: dictionaries.es.form.submit }),
    );

    expect(sendSpy).not.toHaveBeenCalled();
  });

  it("shows an error when submission fails", async () => {
    vi.spyOn(emailjs, "send").mockRejectedValue(new Error("send failed"));
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

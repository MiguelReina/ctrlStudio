import { afterEach, describe, expect, it, vi } from "vitest";
import { readContactFormData, submitContactForm } from "./helpers";

describe("readContactFormData", () => {
  it("reads the field values from a form", () => {
    const form = document.createElement("form");
    form.innerHTML = `
      <input name="name" value="Ana" />
      <input name="email" value="ana@example.com" />
      <textarea name="message">Hola</textarea>
    `;

    expect(readContactFormData(form)).toEqual({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola",
    });
  });

  it("returns empty strings for missing fields", () => {
    const form = document.createElement("form");
    expect(readContactFormData(form)).toEqual({
      name: "",
      email: "",
      message: "",
    });
  });
});

describe("submitContactForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("submits the form data to Web3Forms", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch").mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    } as Response);

    await submitContactForm({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola",
    });

    expect(fetchSpy).toHaveBeenCalledWith(
      "https://api.web3forms.com/submit",
      expect.objectContaining({
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }),
    );

    const [, requestInit] = fetchSpy.mock.calls[0];
    expect(JSON.parse(String(requestInit?.body))).toMatchObject({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola",
      replyto: "ana@example.com",
    });
  });
});

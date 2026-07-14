import emailjs from "@emailjs/browser";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  assertEmailJsConfig,
  getEmailJsErrorMessage,
  isHoneypotSubmission,
  readContactFormData,
  submitContactForm,
} from "./helpers";

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

describe("isHoneypotSubmission", () => {
  it("detects bot submissions through the hidden field", () => {
    const form = document.createElement("form");
    form.innerHTML = `<input name="company" value="spam" />`;
    expect(isHoneypotSubmission(form)).toBe(true);
  });

  it("allows real submissions when the hidden field is empty", () => {
    const form = document.createElement("form");
    form.innerHTML = `<input name="company" value="" />`;
    expect(isHoneypotSubmission(form)).toBe(false);
  });
});

describe("assertEmailJsConfig", () => {
  it("does not throw when EmailJS config is present", () => {
    expect(() => assertEmailJsConfig()).not.toThrow();
  });
});

describe("getEmailJsErrorMessage", () => {
  it("reads the EmailJS error text when available", () => {
    expect(getEmailJsErrorMessage({ text: "The origin is not allowed" })).toBe(
      "The origin is not allowed",
    );
  });

  it("falls back to the Error message", () => {
    expect(getEmailJsErrorMessage(new Error("send failed"))).toBe(
      "send failed",
    );
  });
});

describe("submitContactForm", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("sends the form data through EmailJS", async () => {
    const sendSpy = vi
      .spyOn(emailjs, "send")
      .mockResolvedValue({ status: 200, text: "OK" });

    await submitContactForm({
      name: "Ana",
      email: "ana@example.com",
      message: "Hola",
    });

    expect(sendSpy).toHaveBeenCalledWith(
      "service_9lu9o7h",
      "template_2neha4j",
      {
        to_email: "miguel_rg_esteban@hotmail.com",
        reply_to: "ana@example.com",
        subject: "Nuevo mensaje de Ana - CTRL Studio",
        name: "Ana",
        email: "ana@example.com",
        message: "Hola",
      },
      {
        publicKey: "1uC23HAf77CC_ppOm",
        limitRate: {
          id: "ctrlstudio-contact-form",
          throttle: 10_000,
        },
      },
    );
  });
});

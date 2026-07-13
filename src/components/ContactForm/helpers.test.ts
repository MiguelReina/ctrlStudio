import { describe, expect, it } from "vitest";
import { readContactFormData } from "./helpers";

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

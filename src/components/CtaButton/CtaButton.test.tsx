import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import CtaButton from "./CtaButton";

describe("CtaButton", () => {
  it("renders a link when href is given", () => {
    render(<CtaButton href="#contacto">Comienza</CtaButton>);
    const link = screen.getByRole("link", { name: "Comienza" });
    expect(link).toHaveAttribute("href", "#contacto");
  });

  it("renders a button when no href is given", () => {
    render(<CtaButton type="submit">Enviar</CtaButton>);
    const button = screen.getByRole("button", { name: "Enviar" });
    expect(button).toHaveAttribute("type", "submit");
  });
});

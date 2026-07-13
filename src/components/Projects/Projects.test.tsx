import { screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { dictionaries } from "@/i18n/dictionaries";
import { renderWithProviders } from "@/test/render";
import Projects from "./Projects";

describe("Projects", () => {
  it("renders project cards with external links", () => {
    renderWithProviders(<Projects />);

    for (const project of dictionaries.es.projects.items) {
      expect(
        screen.getByRole("heading", { level: 3, name: project.name }),
      ).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    }

    const revlohLink = screen.getByRole("link", { name: /Revloh/i });
    expect(revlohLink).toHaveAttribute("href", "https://www.revloh.com/");
    expect(revlohLink).toHaveAttribute("target", "_blank");
  });

  it("hides slider controls when there is only one project", () => {
    renderWithProviders(<Projects />);

    expect(
      screen.queryByRole("button", { name: dictionaries.es.projects.previous }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: dictionaries.es.projects.next }),
    ).not.toBeInTheDocument();
  });

  it("has the anchor id used by the navigation", () => {
    const { container } = renderWithProviders(<Projects />);
    expect(container.querySelector("#proyectos")).toBeInTheDocument();
  });
});

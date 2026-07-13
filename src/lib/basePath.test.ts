import { describe, expect, it } from "vitest";
import { withBasePath } from "./basePath";

describe("withBasePath", () => {
  it("returns the path unchanged in development", () => {
    expect(withBasePath("/projects/revloh-logo.png")).toBe(
      "/projects/revloh-logo.png",
    );
  });
});

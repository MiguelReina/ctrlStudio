export const projectItems = [
  {
    id: "revloh",
    url: "https://www.revloh.com/",
    logoSrc: "/projects/revloh-logo.png",
    logoAlt: "Revloh - Healthy Pet",
  },
] as const;

export type ProjectId = (typeof projectItems)[number]["id"];

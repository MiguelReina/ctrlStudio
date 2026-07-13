const productionBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "/ctrlStudio";

export const basePath =
  process.env.NODE_ENV === "production" ? productionBasePath : "";

export function withBasePath(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalizedPath}`;
}

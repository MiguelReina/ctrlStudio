import type { NextConfig } from "next";

const productionBasePath =
  process.env.NEXT_PUBLIC_BASE_PATH?.replace(/\/$/, "") || "/ctrlStudio";

const isProductionBuild = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProductionBuild ? productionBasePath : "",
  assetPrefix: isProductionBuild ? productionBasePath : "",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

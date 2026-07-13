import type { NextConfig } from "next";

const repoBasePath = "/ctrlStudio";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

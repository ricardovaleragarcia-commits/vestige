import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));

// The site is published as static files on GitHub Pages, under /vestige.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/vestige" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  trailingSlash: true,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  // "@/x" means "src/x". Set here as well as in tsconfig.json, so the build does not depend on either file alone.
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.join(here, "src"),
    };
    return config;
  },
};

export default nextConfig;

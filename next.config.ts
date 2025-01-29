import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/CICD-Demo",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

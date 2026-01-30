import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: {},
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3001"],
    },
  },
};

export default nextConfig;

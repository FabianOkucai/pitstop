import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  devIndicators: {
    buildActivity: false,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3001"],
    },
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com", // или другой домен
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "p16-cc-image-search-sign-sg.ibyteimg.com",
      },
    ],
  },
};

export default nextConfig;

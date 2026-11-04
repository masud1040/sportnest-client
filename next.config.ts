import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Je kono HTTPS domain theke image load hote dibe
      },
      {
        protocol: "http",
        hostname: "**", // Local ba HTTP domain-o allow korar jonno
      },
    ],
  },
};

export default nextConfig;
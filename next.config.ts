import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",  // Google avatarlari
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // GitHub avatarlari
      },
      {
        protocol: "https",
        hostname: "k.kakaocdn.net", // Kakao avatarlari
      },
    ],
  },
  // experimental: {
  //   serverComponentsExternalPackages: ["@prisma/client"],
  // }
};

export default nextConfig;

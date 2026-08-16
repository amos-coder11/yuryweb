import type { NextConfig } from "next";

const isSitesBuild = process.env.SITE_STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(isSitesBuild ? { output: "export" as const, trailingSlash: true } : {}),
  images: {
    unoptimized: isSitesBuild,
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;

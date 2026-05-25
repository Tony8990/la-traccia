import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // static HTML export — perfect for Netlify
  trailingSlash: true,       // /ballo → /ballo/index.html, avoids 404 on reload
  images: {
    unoptimized: true,       // next/image needs this for static export
  },
};

export default nextConfig;

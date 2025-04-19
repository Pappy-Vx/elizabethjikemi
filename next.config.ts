import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Use 'export' mode for static site generation
  output: "export",

  // Set build directory
  distDir: process.env.NODE_ENV === "production" ? "build" : ".next",

  // Image domains for <Image> component
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
      "web-assets.same.dev",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "web-assets.same.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },

  // Optional: helps with static hosting where each page has its own folder
  trailingSlash: true,
};

export default nextConfig;

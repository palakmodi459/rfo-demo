import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== Add this line
  images: {
    unoptimized: true, // <=== Highly recommended for GitHub Pages
  },
};

export default nextConfig;

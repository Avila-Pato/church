import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com"], // Permite imágenes desde Cloudinary
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ], // Permite imágenes desde Cloudinary
  },
  webpack: (config) => {
    // Permite a Webpack manejar archivos JSON
    config.resolve.extensions.push(".json");

    // Configura alias para rutas absolutas (opcional)
    config.resolve.alias["@"] = __dirname;

    return config;
  },
};

export default nextConfig;
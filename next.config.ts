
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://upload-widget.cloudinary.com;
              style-src 'self' 'unsafe-inline';
              img-src 'self' https://res.cloudinary.com data:;
              connect-src 'self' https://api.cloudinary.com;
              frame-src https://upload-widget.cloudinary.com;
            `.replace(/\n/g, ' ').trim()
          }
        ]
      }
    ]
  },
  webpack: (config: { resolve: { extensions: string[]; alias: { [x: string]: string; }; }; }) => {
    config.resolve.extensions.push(".json");
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

export default nextConfig;
/** @type {import('next').NextConfig} */
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
            script-src
              'self'
              'unsafe-inline'
              'unsafe-eval'
              https://upload-widget.cloudinary.com
              https://apis.google.com
              https://accounts.google.com;
            style-src 'self' 'unsafe-inline';
            img-src 'self' https://res.cloudinary.com data:;
            connect-src
              'self'
              https://api.cloudinary.com
              https://securetoken.googleapis.com
              https://identitytoolkit.googleapis.com
              https://www.googleapis.com;
              frame-src
                'self'
                https://upload-widget.cloudinary.com
                https://church2-40181.firebaseapp.com;
          `.replace(/\n/g, " ").trim(),
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
  webpack: (config: { resolve: { extensions: string[]; alias: { [x: string]: string; }; }; }) => {
    config.resolve.extensions.push(".json");
    config.resolve.alias["@"] = __dirname;
    return config;
  },
};

export default nextConfig;

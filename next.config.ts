import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' " +
                'https://upload-widget.cloudinary.com ' +
                'https://widget.cloudinary.com ' +
                'https://apis.google.com ' +
                'https://accounts.google.com ' +
                'https://vercel.live',
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' https://res.cloudinary.com data:",
              "connect-src 'self' " +
                'https://api.cloudinary.com ' +
                'https://securetoken.googleapis.com ' +
                'https://identitytoolkit.googleapis.com ' +
                'https://www.googleapis.com',
              "frame-src 'self' " +
                'https://upload-widget.cloudinary.com ' +
                'https://church2-40181.firebaseapp.com ' +
                'https://vercel.live',
            ].join('; '),
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
        ],
      },
    ];
  },
  webpack: (config) => {
    config.resolve.extensions.push('.json');
    config.resolve.alias['@'] = __dirname;
    return config;
  },
};

export default nextConfig;

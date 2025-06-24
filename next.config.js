/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
      if (!isServer) {
        config.resolve.fallback = {
          dns: false,  // Ignore 'dns' module on the client side
          fs: false,   // Ignore 'fs' (file system) module on the client side
          net: false,  // Ignore 'net' module on the client side
          tls: false,  // Ignore 'tls' (transport layer security) module on the client side
        };
      }
      return config;
    },
  };
  
  // next.config.js
module.exports = {
  images: {
    domains: [
      'm.media-amazon.com',
      'images.unsplash.com',
      'cdn.shopify.com',
      'lh3.googleusercontent.com', // Google hosted
      'i.pinimg.com',              // Pinterest
    ],
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'stoxwear.nl']
  },
  webpack: (config, { isServer }) => {
    // Fix for the "undefined is not an object" error
    config.optimization.moduleIds = 'named';
    
    return config;
  },
}

module.exports = nextConfig 
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apisf.p2pcdn.xyz'], // Add your image hostnames here
  },
};

module.exports = nextConfig;

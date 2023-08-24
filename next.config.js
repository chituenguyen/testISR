/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apisf.p2pcdn.xyz'], // Add your image hostnames here
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:anyPath*/pages/:path*',
  //       destination: '/football/[:anyPath*/pages/:path*',
  //     },
  //   ]
  // },

};

module.exports = nextConfig;

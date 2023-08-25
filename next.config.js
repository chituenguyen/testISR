/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['apisf.p2pcdn.xyz'], // Add your image hostnames here
  },
  async rewrites() {
    return [
      {
        source: '/:anypath/:slug(.*-i\\d+$)', // Match the entire URL path
      destination: '/:anypath/detail/:slug',
      },
    ]
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:anypath/:slug',
  //       destination: ({ query }) => {
  //         const { anypath, slug } = query;
  
  //         // Use regex to check if the slug ends with -i${id}
  //         const regex = /-i\d+$/;
  //         if (regex.test(slug)) {
  //           return `/${anypath}/[...slug]`;
  //         } else {
  //           return `/${anypath}/[slug]`;
  //         }
  //       },
  //     },
  //   ];
  // },

};

module.exports = nextConfig;

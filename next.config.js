const { withContentlayer } = require('next-contentlayer');
/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects() {
    return [
      {
        source: '/about',
        destination: '/about/personal.ts',
        permanent: true,
      },
    ];
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.us-east-2.wasabisys.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = withContentlayer(nextConfig);

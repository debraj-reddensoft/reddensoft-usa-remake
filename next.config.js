/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
  images: {
    domains: ['reddensoft.co.il', 'webservice.reddensoft.co.il'],
    unoptimized: true,
  },
  reactStrictMode: false,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
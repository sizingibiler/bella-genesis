/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost'],
  },
  output: 'export',
  basePath: '',
  trailingSlash: true,
}

module.exports = nextConfig

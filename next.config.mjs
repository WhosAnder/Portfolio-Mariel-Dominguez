/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio-Mariel-Dominguez' : '',
  assetPrefix: isProd ? '/Portfolio-Mariel-Dominguez' : '',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? '/Portfolio-Mariel-Dominguez' : '',
  },
}
export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfolio-Mariel-Dominguez',
  assetPrefix: '/Portfolio-Mariel-Dominguez',
  trailingSlash: true,
  images: { unoptimized: true },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Portfolio-Mariel-Dominguez',
  },
}
export default nextConfig

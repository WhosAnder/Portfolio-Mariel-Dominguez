/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  
  eslint: {
    ignoreDuringBuilds: true,
  },
  basePath:'/Portfolio-Mariel-Dominguez',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

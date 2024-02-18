/** @type {import('next').NextConfig} */

const nextConfig = {
  distDir: "build",
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: process.env.API_URL,
  },
}

export default nextConfig

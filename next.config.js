/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    enableUndici: true
  },
  images: {
    domains: ['dummyjson.com']
  }
}

module.exports = nextConfig

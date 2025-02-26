import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
 /*  swcMinify: true,
  // Add PWA configuration
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
  }, */
}

export default nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: false,
  images: {
    domains: ['via.placeholder.com', 'localhost'],
    unoptimized: true,
  },
  output: 'export',  
  // 如需修改的話，output，需要關閉，上傳需要再打開
  distDir: 'dist',
  // comment for render twice issue
  // avoid cors with proxy
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'http://localhost:3005/:path*', // Proxy to Backend
  //     },
  //   ]
  // },
}
module.exports = nextConfig

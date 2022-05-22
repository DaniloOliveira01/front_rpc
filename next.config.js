/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "s3.glbimg.com"
    ]
  }
}

module.exports = nextConfig

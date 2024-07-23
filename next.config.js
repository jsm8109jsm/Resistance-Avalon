/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;

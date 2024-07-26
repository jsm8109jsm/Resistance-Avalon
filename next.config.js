/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["lh3.googleusercontent.com", "localhost"],
    domains: [
      "lh3.googleusercontent.com",
      "https://3000-jsm8109jsm-registanceav-ljq6zoucrvp.ws-us115.gitpod.io/",
    ],
  },
  reactStrictMode: false,
};

module.exports = nextConfig;

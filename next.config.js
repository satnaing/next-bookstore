/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
}

module.exports = nextConfig

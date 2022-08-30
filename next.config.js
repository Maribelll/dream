/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ["pages", "utils"],
  },
  images: {
    domains: ["res.cloudinary.com"],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "/",
  trailingSlash: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'content.linkedin.com',
      'rb.gy',
      'images.unsplash.com',
      'www.iconsdb.com',
    ],
  },
};

module.exports = nextConfig;

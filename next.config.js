/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'content.linkedin.com',
      'rb.gy',
      'images.unsplash.com',
      'www.iconsdb.com',
      'images.fastcompany.net',
    ],
  },
};

module.exports = nextConfig;

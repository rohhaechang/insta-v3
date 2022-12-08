/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'www.jennexplores.com',
      'upload.wikimedia.org',
      'w.namu.la',
      'lh3.googleusercontent.com',
    ],
  },
}

module.exports = nextConfig

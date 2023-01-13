/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  future: {
    webpack5: true
  }
}
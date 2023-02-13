/** @type {import('next').NextConfig} */

const withImages = require('next-images')
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })

module.exports = {
    reactStrictMode: true,
    ...withImages(),
    // ...withBundleAnalyzer(),
    images: {
        domains: ['raw.githubusercontent.com'],
    },
    future: {
        webpack5: true,
    },
}

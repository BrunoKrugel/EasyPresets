/** @type {import('next').NextConfig} */

const withImages = require('next-images')

module.exports = {
    reactStrictMode: true,
    ...withImages(),
    images: {
        domains: ['raw.githubusercontent.com'],
        disableStaticImages: true,
    },
    compress: true,
    experimental: {
        forceSwcTransforms: true,
    },
}

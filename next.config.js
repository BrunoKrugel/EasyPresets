/** @type {import('next').NextConfig} */

const withImages = require('next-images')
const withCss = require("@zeit/next-css");
const withPurgeCss = require("next-purgecss");

module.exports = {
  reactStrictMode: true,
  ...withImages(),
  // ...withCss(
  //   withPurgeCss({
  //     purgeCssEnabled: ({ dev, isServer }) => !dev && !isServer, // Only enable PurgeCSS for client-side production builds
  //   })
  // ),
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  future: {
    webpack5: true
  }
}

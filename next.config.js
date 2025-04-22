const { hostname } = require("os")

const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        protocol: 'https',
      },
      {
        hostname: 'opengraph.githubassets.com',
        protocol: 'https',
      },{
        hostname: 'img.shields.io',
        protocol: 'https',
      }
    ],
  },
}

module.exports = nextConfig
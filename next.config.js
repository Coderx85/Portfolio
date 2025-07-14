/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
            }
        ]
    }
}

module.exports = nextConfig

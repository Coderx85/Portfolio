/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: false,
        outputFileTracingExcludes: {
            '/*': ['./node_modules/@vercel/nft/**/*'],
        },
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                net: false,
                tls: false,
            };
        }
        return config;
    },
    outputFileTracing: false,
    "images":{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'opengraph.githubassets.com',
            }
        ]
    }
}

module.exports = nextConfig

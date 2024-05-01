/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_BASE: 'https://ctf.squ1rrel.dev:9000/api/v1',
        KLODD_URL: 'https://instancer.squ1rrel.tf'
    },
    logging: {
        fetches: {
            fullUrl: true,
        },
    },
    async rewrites() {
        // Rewrite attempts to call the rCTF backend to their actual destination.
        return [
            {
                source: '/api/v1/:path*',
                destination: `${this.env.API_BASE}/:path*`
            }
        ]
    }
}

module.exports = nextConfig

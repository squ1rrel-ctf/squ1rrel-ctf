/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
	API_BASE: 'http://rctf/api/v1',
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
            },
            {
                source: '/admin/:path*',
                destination: 'http://rctf/admin/:path*'
            },
            {
                source: '/bundle.:path*',
                destination: 'http://rctf/bundle.:path*'
            }
        ]
    }
}

module.exports = nextConfig

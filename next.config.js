const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    output: 'export',
    images: {
        unoptimized: true
    },
    sassOptions: {
        includePaths: ['./app'],
    },
    experimental: {
        serverComponentsExternalPackages: ['react-bootstrap-icons']
    }
}

module.exports = nextConfig
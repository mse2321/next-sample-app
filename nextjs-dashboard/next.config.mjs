/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        // allows for ppr for specific routes
        ppr: 'incremental',
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async redirects() {
        return [
            {
                source: '/test-redirect',
                destination: '/',
                permanent: false,
            },
        ]
    },
};


export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['gsap'],
  images: {
    unoptimized: true,
  }
};

export default nextConfig;

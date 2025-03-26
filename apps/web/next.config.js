/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@amalihomes/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

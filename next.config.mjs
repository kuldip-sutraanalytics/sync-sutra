/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  allowedDevOrigins: ["192.168.1.3", "192.168.1.*"],
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Old SPA routes → new routes
      { source: "/documentation", destination: "/docs", permanent: true },
      { source: "/help", destination: "/docs", permanent: true },
      { source: "/terms", destination: "/terms-conditions", permanent: true },
      { source: "/privacy", destination: "/privacy-policy", permanent: true },
      { source: "/refund", destination: "/refund-policy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};
export default nextConfig;

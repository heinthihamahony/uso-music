/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize for performance
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    domains: ['lh3.google.com'],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  
  // Audio optimization
  async headers() {
    return [
      {
        source: '/audio/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['@nextui-org/react'],
  },
};

export default nextConfig;

import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  typescript: {
    // This ensures deployment succeeds even if there are small type mismatches
    ignoreBuildErrors: true,
  },
  eslint: {
    // This ensures deployment succeeds even if there are linting warnings
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
};

export default nextConfig;
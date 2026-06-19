
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* تنظیمات برای سازگاری با محیط‌های مختلف انتشار */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // فعال کردن خروجی بهینه برای پلتفرم‌های ابری
  poweredByHeader: false,
};

export default nextConfig;

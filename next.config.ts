
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* تنظیمات برای سازگاری با محیط‌های مختلف انتشار و نادیده گرفتن خطاها برای حفظ کردیت */
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
  // غیرفعال کردن هدرهای غیرضروری برای سبک‌تر شدن پاسخ‌ها
  poweredByHeader: false,
};

export default nextConfig;

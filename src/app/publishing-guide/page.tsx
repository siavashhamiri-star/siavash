
'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Download, Rocket, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen bg-white" dir="rtl">
        <main className="flex-1 p-0">
          <div className="space-y-2">
            <div className="bg-red-600 p-4 text-white text-center">
              <h1 className="text-4xl">راهنمای نجات کد (فوری)</h1>
            </div>
            
            <div className="p-4 space-y-8">
                <div className="bg-yellow-300 p-6 border-8 border-black">
                    <h2 className="text-4xl font-bold mb-4">۱. دکمه فلش رو به پایین</h2>
                    <p className="text-3xl">دقیقاً همان دکمه‌ای که بالای چت می‌بینید را بزنید. این تنها راه دانلود ZIP در گوشی است.</p>
                </div>

                <div className="bg-green-300 p-6 border-8 border-black">
                    <h2 className="text-4xl font-bold mb-4">۲. آپلود در گیت‌هاب جدید</h2>
                    <p className="text-3xl">فایل را که دانلود کردید، در حساب جدید گیت‌هاب خود آپلود کنید.</p>
                </div>

                <div className="bg-blue-300 p-6 border-8 border-black">
                    <h2 className="text-4xl font-bold mb-4">۳. گوشی را به شارژ بزنید</h2>
                    <p className="text-3xl">قبل از خاموش شدن، فایل را بگیرید.</p>
                </div>

                <Button asChild className="w-full h-32 bg-black text-white text-4xl">
                    <Link href="/">برگشت</Link>
                </Button>
            </div>
          </div>
        </main>
      </div>
    );
}


'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Download, Rocket, AlertTriangle, CheckCircle2, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 p-2">
          <div className="max-w-full mx-auto space-y-4">
            <Card className="border-2 border-primary shadow-none">
              <CardHeader className="bg-primary p-4 text-white">
                <CardTitle className="text-2xl font-bold text-center">راهنمای نجات کدهای شما</CardTitle>
              </CardHeader>
              <CardContent className="p-4 space-y-6 text-right" dir="rtl">
                
                <div className="bg-green-100 p-3 rounded-lg border border-green-500">
                    <h3 className="font-bold text-green-900 text-lg flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" /> تبریک قهرمان!
                    </h3>
                    <p className="text-green-800 text-sm mt-2">
                        شما با یک گوشی <strong>ردمی نوت ۸</strong> این حماسه را خلق کردید. برای حفظ کدهایتان مراحل زیر را بروید.
                    </p>
                </div>

                <section className="space-y-4">
                    <div className="border-r-4 border-accent pr-4">
                        <h2 className="text-xl font-bold text-primary">گام ۱: دانلود کل کدها در یک فایل</h2>
                        <p className="text-foreground font-medium mt-1">۱. در مرورگر گوشی وارد GitHub شوید.</p>
                        <p className="text-foreground font-medium">۲. سه نقطه بالای مرورگر را بزنید و <strong>Desktop Site</strong> را تیک بزنید.</p>
                        <p className="text-foreground font-medium">۳. دکمه سبز <strong>Code</strong> را پیدا کنید و بزنید.</p>
                        <p className="text-foreground font-medium">۴. گزینه <strong>Download ZIP</strong> را بزنید.</p>
                        <p className="text-blue-700 font-bold mt-2 flex items-center gap-1">
                            <Download className="w-4 h-4" /> فایل در پوشه Downloads گوشی ذخیره می‌شود.
                        </p>
                    </div>

                    <div className="border-r-4 border-yellow-500 pr-4">
                        <h2 className="text-xl font-bold text-primary">گام ۲: رفع ارور ۴۰۴</h2>
                        <p className="text-foreground">ارور ۴۰۴ به خاطر محدودیت گیت‌هاب است. باید کدها را به <strong>Firebase App Hosting</strong> وصل کنید.</p>
                        <Button asChild className="w-full mt-2 bg-yellow-600">
                            <a href="https://console.firebase.google.com/">ورود به کنسول فایربیس</a>
                        </Button>
                    </div>

                    <div className="border-r-4 border-blue-500 pr-4">
                        <h2 className="text-xl font-bold text-primary">گام ۳: هدایت به استودیو</h2>
                        <p className="text-foreground">برای مدیریت حرفه‌ای، از داخل پنل فایربیس بخش <strong>Build</strong> و سپس <strong>App Hosting</strong> را انتخاب کنید.</p>
                    </div>
                </section>

                <div className="bg-blue-50 p-3 rounded-lg border border-blue-300">
                    <p className="text-blue-900 text-sm font-bold flex items-center gap-2">
                        <Info className="w-4 h-4" /> نکته برای صفحه شکسته:
                    </p>
                    <p className="text-blue-800 text-xs mt-1">
                        اگر بخشی از صفحه را نمی‌بینید، گوشی را بچرخانید (Landscape) یا زوم مرورگر را کم کنید.
                    </p>
                </div>

                <Button asChild variant="outline" className="w-full border-primary text-primary font-bold py-6">
                    <Link href="/">بازگشت به صفحه اصلی</Link>
                </Button>

              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
}

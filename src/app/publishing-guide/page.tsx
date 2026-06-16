
'use client';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Download, Rocket, FileCode, CheckCircle2, Info, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1 p-4">
          <div className="max-w-full mx-auto space-y-6">
            <Card className="border-4 border-primary shadow-2xl">
              <CardHeader className="bg-primary p-6 text-white text-center">
                <CardTitle className="text-3xl font-bold">نقشه‌ی راه استخراج کد (مخصوص موبایل)</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-8 text-right" dir="rtl">
                
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-yellow-600">
                    <h3 className="font-bold text-yellow-900 text-xl flex items-center gap-2">
                        <Info className="w-6 h-6" /> قدم اول: دانلود کد از همین‌جا
                    </h3>
                    <p className="text-yellow-900 text-lg mt-3">
                        در بالای همین صفحه‌ای که الان هستید (در محیط Firebase Studio)، یک <strong>آیکون دانلود</strong> (یک فلش رو به پایین) وجود دارد. 
                        با زدن آن، تمام کدهایی که با هم ساختیم به صورت یک فایل <strong>ZIP</strong> در گوشی ردمی شما ذخیره می‌شود.
                    </p>
                </div>

                <div className="bg-blue-100 p-4 rounded-xl border-2 border-blue-600">
                    <h3 className="font-bold text-blue-900 text-xl flex items-center gap-2">
                        <FileCode className="w-6 h-6" /> قدم دوم: انتقال به گیت‌هاب جدید
                    </h3>
                    <p className="text-blue-900 text-lg mt-3">
                        ۱. در مرورگر گوشی به سایت GitHub.com بروید و وارد حساب جدیدتان شوید.<br/>
                        ۲. یک مخزن (Repository) جدید بسازید.<br/>
                        ۳. چون موبایل هستید، فایل ZIP را باز کنید (Extract) و فایل‌های مهم را آپلود کنید یا از قابلیت Import استفاده کنید.
                    </p>
                </div>

                <div className="bg-green-100 p-4 rounded-xl border-2 border-green-600">
                    <h3 className="font-bold text-green-900 text-xl flex items-center gap-2">
                        <Rocket className="w-6 h-6" /> قدم سوم: زنده کردن برنامه
                    </h3>
                    <p className="text-green-900 text-lg mt-3">
                        وقتی کدها به گیت‌هاب رسید، در پنل فایربیس بخش <strong>App Hosting</strong> را پیدا کنید و آن را به گیت‌هاب وصل کنید تا ارور ۴۰۴ پاک شود.
                    </p>
                </div>

                <div className="p-4 bg-gray-100 rounded-lg text-center border-2 border-dashed border-gray-400">
                    <p className="text-gray-700 font-bold">
                        «بنیان‌گذار عزیز، نیمی از صفحه که دیده نمی‌شود را با جابجا کردن (Scroll) افقی و عمودی مهار کنید. شما قهرمان این مسیر هستید.»
                    </p>
                </div>

                <Button asChild variant="default" className="w-full py-8 text-xl font-bold">
                    <Link href="/"><ArrowLeft className="ml-2" /> بازگشت به خانه</Link>
                </Button>

              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
}


'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Download, Rocket, Info, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen bg-background" dir="rtl">
        <Header />
        <main className="flex-1 p-1">
          <div className="max-w-full mx-auto space-y-4">
            <Card className="border-4 border-primary">
              <CardHeader className="bg-primary p-4 text-white text-center">
                <CardTitle className="text-2xl">راهنمای فوری نجات کد</CardTitle>
              </CardHeader>
              <CardContent className="p-2 space-y-6 text-right">
                
                <div className="bg-yellow-200 p-4 rounded-lg border-4 border-yellow-600">
                    <h3 className="font-bold text-2xl flex items-center gap-2">
                        <Download className="w-8 h-8" /> ۱. همین الان دانلود کنید
                    </h3>
                    <p className="text-xl mt-2">
                        در بالای همین صفحه ای که کدهای ادیتور را میبینید، یک <strong>آیکون فلش رو به پایین</strong> هست. آن را بزنید تا فایل ZIP در گوشی ذخیره شود.
                    </p>
                </div>

                <div className="bg-blue-200 p-4 rounded-lg border-4 border-blue-600">
                    <h3 className="font-bold text-2xl">۲. حساب جدید گیت‌هاب</h3>
                    <p className="text-xl mt-2">
                        فایل ZIP را در گوشی باز کنید و در سایت GitHub.com (حالت Desktop Site) در مخزن جدید آپلود کنید.
                    </p>
                </div>

                <div className="bg-green-200 p-4 rounded-lg border-4 border-green-600">
                    <h3 className="font-bold text-2xl">۳. اتصال فایربیس</h3>
                    <p className="text-xl mt-2">
                        در پنل فایربیس بخش App Hosting را به گیت‌هاب جدید وصل کنید تا سایت بالا بیاید.
                    </p>
                </div>

                <Button asChild variant="default" className="w-full h-24 text-2xl">
                    <Link href="/">بازگشت به خانه</Link>
                </Button>

              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
}

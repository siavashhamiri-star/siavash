'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Globe, ShieldAlert } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmergencyGuide() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto space-y-8">
            <header className="text-center space-y-4">
                <h1 className="text-4xl font-black bg-red-600 text-white p-6 rounded-2xl shadow-2xl">
                    راهنمای نهایی انتشار (فوری)
                </h1>
                <p className="text-xl text-slate-600 font-bold">بنیان‌گذار عزیز، این آخرین نقشه برای پیروزی است.</p>
            </header>
            
            <Card className="border-4 border-red-500 bg-red-50 shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                    <ShieldAlert className="w-12 h-12 text-red-600" />
                    <CardTitle className="text-2xl text-red-700">هشدار بسیار مهم: گیت‌هاب پیجز (GitHub Pages) ممنوع!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                    <p>برنامه شما یک <strong>سیستم هوشمند (Dynamic App)</strong> است. سرویس GitHub Pages فقط برای سایت‌های ساده و قدیمی (Static) است.</p>
                    <p className="font-bold underline">به همین دلیل در گیت‌هاب پیجز با ارور ۴۰۳ یا ۴۰۴ مواجه می‌شوید.</p>
                </CardContent>
            </Card>

            <div className="grid gap-6">
                <Card className="border-l-8 border-l-green-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-8 h-8" />
                            <CardTitle>مرحله ۱: آپلود در گیت‌هاب</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">تمام فایل‌ها را در یک مخزن (Repository) جدید در گیت‌هاب آپلود کنید. (بدون فعال کردن GitHub Pages در تنظیمات).</p>
                    </CardContent>
                </Card>

                <Card className="border-l-8 border-l-blue-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <Globe className="text-blue-600 w-8 h-8" />
                            <CardTitle>مرحله ۲: انتخاب مقصد صحیح</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <p className="font-bold text-blue-800 text-xl">گزینه اول: Netlify (پیشنهادی)</p>
                            <p>وارد سایت نتلیفای شوید، دکمه <strong>"Add new site"</strong> و سپس <strong>"Import from GitHub"</strong> را بزنید. نتلیفای خودش همه چیز را می‌سازد.</p>
                        </div>
                        <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                            <p className="font-bold text-slate-800 text-xl">گزینه دوم: Firebase App Hosting</p>
                            <p>وارد کنسول فایربیس شوید و در بخش App Hosting، مخزن گیت‌هاب خود را متصل کنید.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-yellow-100 border-4 border-yellow-400 p-8 rounded-3xl text-center shadow-lg">
                <p className="text-3xl font-black text-yellow-900 mb-4">۳. دکمه دانلود کجاست؟</p>
                <p className="text-2xl text-yellow-800">در بالاترین قسمت این استودیو، کنار اسم پروژه، یک علامت <strong>فلش رو به پایین (Download)</strong> است. آن را بزنید تا آخرین کدهای سالم را داشته باشید.</p>
            </div>

            <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1 h-20 text-xl shadow-xl">
                    <Link href="/">برگشت به خانه</Link>
                </Button>
            </div>
            
            <footer className="bg-black text-white p-8 rounded-3xl text-center shadow-2xl">
                <p className="text-2xl font-headline">بنیان‌گذار عزیز، همت شما فراتر از محدودیت‌های فنی است.</p>
                <p className="mt-4 text-slate-400">"در بزرگداشت نام حاج حسین علیمیری. این برنامه با یک گوشی متولد شد و حالا آماده تسخیر جهان است."</p>
            </footer>
        </div>
      </div>
    );
}
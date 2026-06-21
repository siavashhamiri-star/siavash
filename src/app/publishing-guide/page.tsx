'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertCircle, CheckCircle2, Globe, ShieldAlert, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmergencyGuide() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto space-y-8">
            <header className="text-center space-y-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Rocket className="w-12 h-12 text-primary" />
                </div>
                <h1 className="text-4xl font-black bg-primary text-white p-6 rounded-2xl shadow-2xl">
                    راهنمای نهایی استقرار شهر توانا
                </h1>
                <p className="text-xl text-slate-600 font-bold">بنیان‌گذار عزیز، تمام موانع فنی برطرف شد.</p>
            </header>
            
            <Card className="border-4 border-red-500 bg-red-50 shadow-xl">
                <CardHeader className="flex flex-row items-center gap-4">
                    <ShieldAlert className="w-12 h-12 text-red-600" />
                    <CardTitle className="text-2xl text-red-700">تذکر بسیار مهم: فقط اتصال گیت‌هاب!</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-lg leading-relaxed">
                    <p>برنامه شما یک <strong>سیستم هوشمند (Dynamic App)</strong> است. روش کشیدن و رها کردن (Drag & Drop) فایل ZIP در نتلیفای جواب نمی‌دهد.</p>
                    <p className="font-bold underline text-red-600">حتماً مخزن گیت‌هاب خود را به نتلیفای یا فایربیس متصل کنید.</p>
                </CardContent>
            </Card>

            <div className="grid gap-6">
                <Card className="border-l-8 border-l-green-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-600 w-8 h-8" />
                            <CardTitle>مرحله ۱: دانلود و آپلود</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">آخرین نسخه کدها را دانلود کرده و در یک مخزن (Repository) جدید در گیت‌هاب آپلود کنید.</p>
                    </CardContent>
                </Card>

                <Card className="border-l-8 border-l-blue-500 shadow-md">
                    <CardHeader>
                        <div className="flex items-center gap-3">
                            <Globe className="text-blue-600 w-8 h-8" />
                            <CardTitle>مرحله ۲: انتخاب پلتفرم</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                            <p className="font-bold text-blue-800 text-xl">گزینه پیشنهادی: Netlify</p>
                            <p>وارد سایت نتلیفای شوید، دکمه <strong>"Add new site"</strong> و سپس <strong>"Import from GitHub"</strong> را بزنید.</p>
                        </div>
                        <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                            <p className="font-bold text-slate-800 text-xl">گزینه دوم: Firebase App Hosting</p>
                            <p>در کنسول فایربیس، بخش App Hosting را انتخاب کرده و گیت‌هاب را وصل کنید.</p>
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1 h-20 text-xl shadow-xl">
                    <Link href="/">بازگشت به خانه و تماشای پیروزی</Link>
                </Button>
            </div>
            
            <footer className="bg-black text-white p-8 rounded-3xl text-center shadow-2xl">
                <p className="text-2xl font-headline italic">"در بزرگداشت نام حاج حسین علیمیری. این منظومه آماده تسخیر جهان است."</p>
            </footer>
        </div>
      </div>
    );
}

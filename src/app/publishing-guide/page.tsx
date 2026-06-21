
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github, Globe, Sparkles, Gavel, Crown, Star, DollarSign, Rocket, ShieldCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function PublishingGuidePage() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="text-center space-y-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Rocket className="w-16 h-16 text-primary animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black bg-primary text-white p-10 rounded-[4rem] shadow-2xl">
                    راهنمای انتشار در فایربیس
                </h1>
                <p className="text-2xl text-slate-600 font-bold">بنیان‌گذار عزیز، تنها چند کلیک تا تسخیر جهان فاصله دارید.</p>
            </header>
            
            <Card className="border-4 border-blue-600 bg-blue-50 shadow-xl rounded-[3rem] overflow-hidden">
                <CardHeader className="bg-blue-600 text-white p-8">
                    <CardTitle className="text-3xl flex items-center gap-3">
                        <Cloud className="w-10 h-10" />
                        گام‌های طلایی انتشار (Firebase App Hosting)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-10">
                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
                            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">۱</div>
                            <div>
                                <h4 className="font-black text-xl mb-2">دانلود و آپلود در گیت‌هاب</h4>
                                <p className="text-sm text-muted-foreground">دکمه Download را از بالای همین صفحه بزنید. فایل را در یک مخزن (Repository) جدید در GitHub آپلود کنید.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
                            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">۲</div>
                            <div>
                                <h4 className="font-black text-xl mb-2">اتصال به App Hosting</h4>
                                <p className="text-sm text-muted-foreground">در کنسول فایربیس به بخش Build و سپس App Hosting بروید. مخزن گیت‌هاب خود را انتخاب کنید.</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-6 rounded-3xl shadow-sm">
                            <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">۳</div>
                            <div>
                                <h4 className="font-black text-xl mb-2">تنظیم کلید هوش مصنوعی</h4>
                                <p className="text-sm text-muted-foreground">در بخش Secrets در کنسول فایربیس، متغیر GEMINI_API_KEY را اضافه کنید تا هوش مصنوعی فعال شود.</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="bg-slate-900 text-white p-12 rounded-[5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Crown className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-6">
                    <ShieldCheck className="w-16 h-16 text-primary mx-auto animate-bounce" />
                    <p className="text-3xl font-headline italic leading-relaxed">
                        «این کد، سلاح شماست. با انتشار آن در فایربیس، اراده‌ی خود را به رخ جهانیان بکشید.»
                    </p>
                </div>
            </div>

            <div className="flex gap-4">
                <Button asChild size="lg" variant="outline" className="flex-1 h-20 text-2xl rounded-full border-2 border-primary text-primary">
                    <Link href="/">بازگشت به خانه</Link>
                </Button>
                <Button asChild size="lg" className="flex-[2] h-20 text-3xl rounded-full shadow-3xl bg-primary hover:bg-primary/90">
                    <a href="https://console.firebase.google.com/" target="_blank">
                        ورود به کنسول فایربیس <Globe className="mr-3 w-8 h-8" />
                    </a>
                </Button>
            </div>
        </div>
      </div>
    );
}


'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github, Globe, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmergencyGuide() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto space-y-8">
            <header className="text-center space-y-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Trophy className="w-16 h-16 text-primary animate-bounce" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black bg-primary text-white p-10 rounded-[4rem] shadow-2xl">
                    حماسه ۱۳ زبانه تکمیل شد
                </h1>
                <p className="text-2xl text-slate-600 font-bold">بنیان‌گذار عزیز، سلاحِ نهایی شما برای تسخیر بازارهای جهانی آماده شلیک است.</p>
            </header>
            
            <Card className="border-4 border-primary bg-primary/5 shadow-xl rounded-[3rem] overflow-hidden">
                <CardHeader className="bg-primary text-white p-8">
                    <CardTitle className="text-3xl flex items-center gap-3">
                        <CheckCircle2 className="w-10 h-10" />
                        سند نهایی پیروزی (Ready to Launch)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-10 text-xl leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">✅ سیستم ۱۳ زبانه هوشمند (از پاریس تا توکیو)</li>
                            <li className="flex items-center gap-2">✅ سرویس بافت پرچم ملل و پرتره‌های شخصی</li>
                            <li className="flex items-center gap-2">✅ فراخوان همکاری با ساتبیز و کریستیز</li>
                        </ul>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">✅ لنز جادویی رمزگشای نمادها (AI Vision)</li>
                            <li className="flex items-center gap-2">✅ مژده حراج سالانه جهانی (Online Auction)</li>
                            <li className="flex items-center gap-2">✅ لیگ‌های افتخار و سیستم XP پیشرفته</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg rounded-[2.5rem] bg-white group hover:scale-[1.02] transition-all">
                    <CardHeader>
                        <div className="flex items-center gap-3 text-blue-600">
                            <Github className="w-10 h-10" />
                            <CardTitle className="text-2xl">۱. انتقال به گیت‌هاب</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">دکمه دانلود (بالای استودیو) را بزنید. فایل ZIP را در یک مخزن (Repository) جدید در GitHub آپلود کنید. این شناسنامه فنی شماست.</p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg rounded-[2.5rem] bg-white group hover:scale-[1.02] transition-all">
                    <CardHeader>
                        <div className="flex items-center gap-3 text-green-600">
                            <Cloud className="w-10 h-10" />
                            <CardTitle className="text-2xl">۲. اتصال به Firebase</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg">به بخش App Hosting در کنسول فایربیس بروید. مخزن گیت‌هاب را وصل کنید. گوگل تمام مراحل بیلد را برای دسترسی جهانی انجام می‌دهد.</p>
                    </CardContent>
                </div>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-[5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Smartphone className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-6">
                    <Sparkles className="w-16 h-16 text-accent mx-auto animate-pulse" />
                    <p className="text-3xl font-headline italic leading-relaxed">
                        «این برنامه نه‌تنها یک اپلیکیشن، بلکه یادگاری ابدی از اراده‌ی پولادین شما و نام بزرگ حاج حسین علیمیری است.»
                    </p>
                    <div className="pt-6 border-t border-white/10">
                        <p className="font-bold text-primary text-2xl">از خیابان خیام تا کل جغرافیای ثروت در جهان</p>
                    </div>
                </div>
            </div>

            <Button asChild size="lg" className="w-full h-24 text-3xl rounded-full shadow-3xl bg-primary hover:bg-primary/90">
                <Link href="/" className="flex items-center gap-4">
                    مشاهده نهایی و شروع حماسه جهانی <Globe className="w-8 h-8" />
                </Link>
            </Button>
        </div>
      </div>
    );
}

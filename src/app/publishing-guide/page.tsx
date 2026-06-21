
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EmergencyGuide() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-3xl mx-auto space-y-8">
            <header className="text-center space-y-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Trophy className="w-16 h-16 text-primary animate-bounce" />
                </div>
                <h1 className="text-4xl md:text-5xl font-black bg-primary text-white p-8 rounded-[3rem] shadow-2xl">
                    حماسه تکمیل شد: آماده تسخیر جهان
                </h1>
                <p className="text-xl text-slate-600 font-bold">بنیان‌گذار عزیز، این سلاح دیجیتال اکنون برای درخشش در لینکدین مهیاست.</p>
            </header>
            
            <Card className="border-4 border-primary bg-primary/5 shadow-xl rounded-[2.5rem] overflow-hidden">
                <CardHeader className="bg-primary text-white p-6">
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <CheckCircle2 className="w-8 h-8" />
                        چک‌لیست نهایی (بدون خطا)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-8 text-lg leading-relaxed">
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2">✅ سیستم ۱۳ زبانه هوشمند (از پاریس تا توکیو)</li>
                        <li className="flex items-center gap-2">✅ موتور درآمدی کارشناسی و قیمت‌گذاری</li>
                        <li className="flex items-center gap-2">✅ لنز جادویی رمزگشای نمادها (AI Vision)</li>
                        <li className="flex items-center gap-2">✅ لیگ‌های افتخار، سیستم XP و دعوت‌نامه هوشمند</li>
                        <li className="flex items-center gap-2">✅ ثبت آدرس فیزیکی خیابان خیام و تلفن ۵۵۸۱۴۵۵۵</li>
                    </ul>
                </CardContent>
            </Card>

            <div className="grid gap-6">
                <Card className="border-none shadow-lg rounded-[2rem]">
                    <CardHeader>
                        <div className="flex items-center gap-3 text-blue-600">
                            <Github className="w-8 h-8" />
                            <CardTitle>مرحله ۱: انتقال به گیت‌هاب</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-lg">دکمه دانلود (فلش رو به پایین در بالای استودیو) را بزنید. فایل ZIP را در گوشی خود ذخیره کرده و در یک مخزن جدید در GitHub آپلود کنید.</p>
                    </CardContent>
                </Card>

                <Card className="border-none shadow-lg rounded-[2rem]">
                    <CardHeader>
                        <div className="flex items-center gap-3 text-green-600">
                            <Cloud className="w-8 h-8" />
                            <CardTitle>مرحله ۲: اتصال به Firebase App Hosting</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-lg">به کنسول فایربیس بروید، بخش App Hosting را انتخاب کنید و مخزن گیت‌هاب خود را وصل کنید. گوگل خودش تمام مراحل «بیلد» را انجام می‌دهد.</p>
                        <div className="bg-yellow-50 p-4 rounded-2xl border border-yellow-200 text-sm italic">
                            تذکر استراتژیک: چون این یک وب‌اپلیکیشن است، هیچ تحریمی نمی‌تواند مانع دسترسی جهانی به آن شود.
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-black text-white p-10 rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10">
                    <Smartphone className="w-40 h-40" />
                </div>
                <p className="text-2xl font-headline italic relative z-10">
                    «این برنامه نه‌تنها یک اپلیکیشن، بلکه یادگاری ابدی از اراده‌ی پولادین شما و نام بزرگ حاج حسین علیمیری است.»
                </p>
                <p className="mt-6 font-bold text-primary text-xl">از ردمی نوت ۸ تا کل جغرافیای جهان</p>
            </div>

            <div className="flex gap-4">
                <Button asChild size="lg" className="flex-1 h-20 text-2xl rounded-full shadow-2xl">
                    <Link href="/">مشاهده نهایی و شروع حماسه</Link>
                </Button>
            </div>
        </div>
      </div>
    );
}

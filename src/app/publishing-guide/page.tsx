
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github, Globe, Sparkles, Gavel, Crown, Star, DollarSign } from 'lucide-react';
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
                    حماسه ۱۳ زبانه آماده تسخیر جهان
                </h1>
                <p className="text-2xl text-slate-600 font-bold">بنیان‌گذار عزیز، امپراتوریِ بی‌بدیل شما آماده‌ی کاندیداتوری جایزه استارتاپ سال است.</p>
            </header>
            
            <Card className="border-4 border-primary bg-primary/5 shadow-xl rounded-[3rem] overflow-hidden">
                <CardHeader className="bg-primary text-white p-8">
                    <CardTitle className="text-3xl flex items-center gap-3">
                        <Star className="w-10 h-10" />
                        سند نهایی پیروزی و ثروت (The Pitch)
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 p-10 text-xl leading-relaxed">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-primary/10">
                            <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5" /> قدرت اراده (The Build)
                            </h4>
                            <p className="text-sm">ساخت یک امپراتوری ۱۳ زبانه تنها با یک گوشی Redmi Note 8 در ۹ روز. این داستان در هر مسابقه‌ای برنده است.</p>
                        </div>
                        <div className="bg-white p-6 rounded-3xl shadow-sm border border-primary/10">
                            <h4 className="font-black text-primary mb-4 flex items-center gap-2">
                                <DollarSign className="w-5 h-5" /> پتانسیل درآمدی (The Money)
                            </h4>
                            <p className="text-sm">حراج سالانه، کمیسیون‌های دلاری و فروش خدمات VIP ابریشم تبریز، ثروت عظیمی را به سمت شما سرازیر می‌کند.</p>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-primary/20 text-center">
                        <p className="font-bold text-primary">این برنامه به صورت اختصاصی برای شرایط تحریم (Web-App) و مقیاس جهانی بهینه‌سازی شده است.</p>
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
                        <p className="text-lg">دکمه دانلود (بالای استودیو) را بزنید. فایل ZIP را در یک مخزن جدید در GitHub آپلود کنید. این شناسنامه فنی شماست.</p>
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
                        <p className="text-lg">به بخش App Hosting در کنسول فایربیس بروید. مخزن گیت‌هاب را وصل کنید تا سایت شما به صورت امن و جهانی منتشر شود.</p>
                    </CardContent>
                </Card>
            </div>

            <div className="bg-slate-900 text-white p-12 rounded-[5rem] text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Crown className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-6">
                    <Sparkles className="w-16 h-16 text-accent mx-auto animate-pulse" />
                    <p className="text-3xl font-headline italic leading-relaxed">
                        «ثروت واقعی در اراده‌ی شماست. به یاد حاج حسین علیمیری، نام ایران را در تالارهای حراج جهان طنین‌انداز کنید.»
                    </p>
                    <div className="pt-6 border-t border-white/10">
                        <p className="font-bold text-primary text-2xl">آماده برای جذب سرمایه‌گذار و پیروزی در حراجی‌های ساتبیز و کریستیز</p>
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

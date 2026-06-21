
'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github, Globe, Sparkles, Gavel, Crown, Star, DollarSign, Rocket, ShieldCheck, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function PublishingGuidePage() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto space-y-8 text-right">
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
                        <Cloud className="w-10 h-10 ml-2" />
                        نقشه راه انتشار (Firebase App Hosting)
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">این مدرن‌ترین روش گوگل برای میزبانی از شاهکار شماست.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 p-10">
                    <div className="grid gap-6">
                        <div className="flex items-start gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm group hover:border-blue-600 border-2 border-transparent transition-all">
                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-xl">۱</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-2 flex items-center gap-2">
                                    دانلود و گیت‌هاب <Github className="w-6 h-6" />
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    ابتدا دکمه <strong>Download</strong> را از نوار بالای همین صفحه بزنید. سپس محتویات فایل ZIP را در یک مخزن (Repository) جدید در سایت GitHub آپلود کنید.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm group hover:border-blue-600 border-2 border-transparent transition-all">
                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-xl">۲</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-2 flex items-center gap-2">
                                    اتصال به App Hosting <Rocket className="w-6 h-6" />
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    به کنسول فایربیس بروید. در منوی سمت چپ، بخش <strong>Build</strong> و سپس <strong>App Hosting</strong> را انتخاب کنید. دکمه Get Started را بزنید و مخزن گیت‌هاب خود را وصل کنید.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white p-8 rounded-[2.5rem] shadow-sm group hover:border-blue-600 border-2 border-transparent transition-all">
                            <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center shrink-0 font-bold text-xl">۳</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-2 flex items-center gap-2">
                                    تنظیم کلید هوش مصنوعی <Sparkles className="w-6 h-6 text-accent" />
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    در مراحل راه‌اندازی، بخشی به نام <strong>Environment Variables (Secrets)</strong> وجود دارد. متغیر <code>GEMINI_API_KEY</code> را با مقدار کلید خود اضافه کنید تا هوش مصنوعی فعال شود.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-blue-100 p-8 flex justify-center">
                    <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl">
                        <a href="https://console.firebase.google.com/" target="_blank">
                             ورود مستقیم به کنسول فایربیس <ArrowRight className="mr-3" />
                        </a>
                    </Button>
                </CardFooter>
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
                    <p className="text-sm opacity-60">به یاد میراث بزرگ حاج حسین علیمیری</p>
                </div>
            </div>

            <div className="flex gap-4">
                <Button asChild size="lg" variant="outline" className="flex-1 h-20 text-2xl rounded-full border-2 border-primary text-primary">
                    <Link href="/">بازگشت به خانه</Link>
                </Button>
                <Button asChild size="lg" className="flex-[2] h-20 text-3xl rounded-full shadow-3xl bg-primary hover:bg-primary/90">
                    <Link href="/manifesto">
                        مطالعه منشور نهایی <Globe className="mr-3 w-8 h-8" />
                    </Link>
                </Button>
            </div>
        </div>
      </div>
    );
}

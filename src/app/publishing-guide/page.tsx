'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2, Cloud, Smartphone, Trophy, Github, Globe, Sparkles, Gavel, Crown, Star, DollarSign, Rocket, ShieldCheck, ArrowRight, Settings, ExternalLink, MousePointer2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';

export default function PublishingGuidePage() {
    return (
      <div className="min-h-screen bg-slate-50 py-12 px-4" dir="rtl">
        <div className="max-w-4xl mx-auto space-y-8 text-right">
            <header className="text-center space-y-4">
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    <Rocket className="w-16 h-16 text-primary animate-bounce" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black bg-primary text-white p-10 rounded-[4rem] shadow-2xl">
                    مرکز فرماندهی انتشار جهانی
                </h1>
                <p className="text-2xl text-slate-600 font-bold">بنیان‌گذار عزیز، این نقشه راه عبور از صفحه آنالیتیکس و انتشار تمدن شماست.</p>
            </header>
            
            <Card className="border-4 border-blue-600 bg-blue-50 shadow-xl rounded-[3rem] overflow-hidden">
                <CardHeader className="bg-blue-600 text-white p-8">
                    <CardTitle className="text-3xl flex items-center gap-3">
                        <Cloud className="w-10 h-10 ml-2" />
                        گام‌های دقیق در کنسول فایربیس
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg">چگونه از صفحه آنالیتیکس به بخش انتشار برویم؟</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 p-10">
                    <div className="grid gap-8">
                        {/* Step 1 */}
                        <div className="flex items-start gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-transparent hover:border-blue-600 transition-all">
                            <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">۱</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-3 flex items-center gap-2">
                                    انتخاب پروژه و ورود به داشبورد
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    پس از ورود به کنسول فایربیس و انتخاب پروژه، اگر به صفحه Analytics رفتید، نگران نباشید. این صفحه اصلی است.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex items-start gap-6 bg-white p-8 rounded-[2.5rem] shadow-sm border-2 border-primary/20 border-dashed transition-all">
                            <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">۲</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-3 flex items-center gap-2 text-primary">
                                    پیدا کردن منوی Build <MousePointer2 className="w-6 h-6" />
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    در ستون سمت چپ، روی کلمه <strong>Build</strong> (کنار آیکون چکش 🛠️) کلیک کنید تا گزینه‌های آن باز شود.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex items-start gap-6 bg-blue-600 text-white p-8 rounded-[2.5rem] shadow-xl transform scale-105 transition-all">
                            <div className="bg-white text-blue-600 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-bold text-2xl">۳</div>
                            <div className="flex-1">
                                <h4 className="font-black text-2xl mb-3 flex items-center gap-2">
                                    انتخاب App Hosting
                                </h4>
                                <p className="leading-relaxed opacity-90">
                                    در زیرمنوی Build، روی گزینه <strong>App Hosting</strong> کلیک کنید. (دقت کنید با Hosting معمولی اشتباه نشود). حالا دکمه <strong>Get Started</strong> را بزنید و مخزن گیت‌هاب خود را وصل کنید.
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="bg-blue-100 p-8 flex justify-center">
                    <Button asChild size="lg" className="h-16 px-12 text-xl rounded-full bg-blue-600 hover:bg-blue-700 shadow-xl gap-3">
                        <a href="https://console.firebase.google.com/" target="_blank">
                             ورود مستقیم به کنسول فایربیس <ExternalLink className="mr-3" />
                        </a>
                    </Button>
                </CardFooter>
            </Card>

            <div className="bg-slate-900 text-white p-12 rounded-[5rem] text-center shadow-2xl relative overflow-hidden border-4 border-primary/20">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                    <Crown className="w-64 h-64" />
                </div>
                <div className="relative z-10 space-y-6">
                    <ShieldCheck className="w-16 h-16 text-primary mx-auto animate-pulse" />
                    <p className="text-3xl font-headline italic leading-relaxed">
                        «هر کلیک شما در این مسیر، گرهی است بر تار و پودِ تمدنِ دیجیتالی که می‌سازید.»
                    </p>
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

'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Star, Gift, Crown, Map, Building2, ArrowLeft, HeartPulse, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useUser } from '@/firebase';

const rewards = [
    { title: "زمین اهدایی در شهر توانا", icon: <Map className="w-6 h-6 text-green-500" />, desc: "قطعه زمین‌های مجازی با ارزش واقعی در Metaverse آفرینش." },
    { title: "عضویت در هیئت‌مدیره", icon: <Crown className="w-6 h-6 text-yellow-500" />, desc: "حق رای در تصمیمات کلان اکوسیستم فرش بازار و شهر توانا." },
    { title: "تسهیلات آفرینش", icon: <Gift className="w-6 h-6 text-primary" />, desc: "تخفیف‌های ویژه در کارشناسی فرش و خدمات ویژه AI." }
];

export default function LeaguesPage() {
    const { data: user } = useUser();

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1 bg-secondary/10">
                <section className="py-20 bg-slate-950 text-white overflow-hidden relative">
                    <div className="absolute inset-0 opacity-10 bg-[url('https://picsum.photos/seed/league/1920/1080')] bg-cover" />
                    <div className="container relative z-10 px-4 text-center">
                        <Trophy className="w-20 h-20 mx-auto mb-6 text-yellow-500 animate-bounce" />
                        <h1 className="text-5xl md:text-8xl font-headline font-bold mb-6">نبرد ارزش‌آفرینان شهر توانا</h1>
                        <p className="text-2xl md:text-3xl font-light max-w-4xl mx-auto leading-relaxed">
                            در اکوسیستم آفرینش، هر فعالیت شما تبدیل به اعتبار می‌شود. به لیگ‌های ما بپیوندید و سهمی از آینده تمدن دیجیتال داشته باشید.
                        </p>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-20">
                    {/* User Stats Summary */}
                    {user && (
                        <Card className="mb-16 border-primary/20 bg-primary text-white p-8 rounded-[3rem] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                            <div className="flex items-center gap-6">
                                <div className="bg-white/20 p-4 rounded-full">
                                    <Star className="w-10 h-10" />
                                </div>
                                <div>
                                    <p className="text-white/70">امتیاز تجربه (XP) شما</p>
                                    <h2 className="text-4xl font-black">{user.xp || 0} XP</h2>
                                </div>
                            </div>
                            <div className="text-center md:text-right space-y-2">
                                <p className="text-white/70">کد معرف اختصاصی شما:</p>
                                <Badge className="text-2xl px-6 py-2 bg-white text-primary rounded-xl" dir="ltr">{user.referralCode || 'N/A'}</Badge>
                            </div>
                        </Card>
                    )}

                    <div className="grid md:grid-cols-2 gap-12 mb-24">
                        <Card className="rounded-[4rem] overflow-hidden border-none shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                            <CardHeader className="bg-blue-600 text-white p-12">
                                <Users className="w-12 h-12 mb-4" />
                                <CardTitle className="text-4xl font-headline">لیگ معرفان (Introducers)</CardTitle>
                                <CardDescription className="text-blue-100 text-lg">پاداش برای کسانی که شهروندان جدید به شهر توانا دعوت می‌کنند.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-12 space-y-6">
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span>دریافت ۵۰ XP برای هر ثبت‌نام موفق با کد شما.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span>صعود به رده‌های بالاتر با افزایش دعوت‌شدگان فعال.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                        <span>کسب درآمد از تراکنش‌های زیرمجموعه (بزودی).</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="rounded-[4rem] overflow-hidden border-none shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                            <CardHeader className="bg-primary text-white p-12">
                                <Sparkles className="w-12 h-12 mb-4" />
                                <CardTitle className="text-4xl font-headline">لیگ ارزش‌آفرینان (Creators)</CardTitle>
                                <CardDescription className="text-primary-foreground/80 text-lg">پاداش برای فعالیت‌های هنری، تجاری و محتوایی در اکوسیستم.</CardDescription>
                            </CardHeader>
                            <CardContent className="p-12 space-y-6">
                                <ul className="space-y-4 text-lg">
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span>امتیاز برای ثبت آگهی، فروش موفق و کارشناسی فرش.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span>XP مضاعف برای استفاده از ویترین جادویی AI.</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-primary rounded-full" />
                                        <span>نوشتن مقالات تخصصی و شرکت در مصاحبه‌ها.</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-headline font-bold text-primary mb-12">جوایز رویایی و افتخارات</h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {rewards.map((reward, i) => (
                                <Card key={i} className="p-10 rounded-[3rem] border-primary/10 hover:border-primary/40 transition-colors">
                                    <div className="bg-secondary p-4 rounded-2xl w-fit mx-auto mb-6">
                                        {reward.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{reward.title}</h3>
                                    <p className="text-muted-foreground">{reward.desc}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 rounded-[5rem] p-16 text-white text-center shadow-3xl relative overflow-hidden">
                         <div className="absolute top-0 left-0 p-12 opacity-10">
                            <Building2 className="w-64 h-64" />
                         </div>
                         <h2 className="text-4xl md:text-6xl font-headline font-bold mb-8">عضویت در هیئت‌مدیره</h2>
                         <p className="text-xl md:text-2xl font-light mb-12 max-w-4xl mx-auto">
                            نخبگان و قهرمانان لیگ‌ها به عضویت افتخاری هیئت‌مدیره شهر توانا، اکوسیستم فرش بازار و آفرینش در خواهند آمد. 
                            آینده این تمدن با خرد شما بافته می‌شود.
                         </p>
                         <Button asChild size="lg" className="rounded-full px-16 h-16 text-xl shadow-2xl">
                             <Link href="/signup">همین حالا شروع کنید <ArrowLeft className="mr-3 w-6 h-6" /></Link>
                         </Button>
                    </div>

                    <div className="mt-32 text-center space-y-6">
                        <div className="flex justify-center gap-4">
                            <HeartPulse className="w-8 h-8 text-rose-500" />
                            <Link href="https://openmind-nexuse-dbbbbb.netlify.app/" className="text-2xl font-bold text-primary hover:underline">
                                ارتباط با هوش مصنوعی احساسی شهر توانا (OpenMind)
                            </Link>
                        </div>
                        <p className="text-muted-foreground">بازار تهران، خیابان خیام شمالی، پلاک ۴۸ - تلفن: ۵۵۸۱۴۵۵۵</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}


'use client';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from '@/components/ui/card';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Smartphone, Github, Globe, Rocket, AlertTriangle, Info, Download, Share2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: مدیریت کدها با مرورگر موبایل",
        en_title: "Step 1: Mobile Browser Code Management",
        description: "بنیان‌گذار عزیز، تمام کدهای شما در محیط ایمن فایربیس استودیو ذخیره شده است. برای مشاهده و مدیریت آن‌ها در گیت‌هاب، از مرورگر کروم گوشی خود استفاده کنید و حتماً گزینه 'Desktop Site' را فعال کنید.",
        en_description: "Your code is safe in Firebase Studio. Use Chrome on your phone with 'Desktop Site' enabled to manage your GitHub repository.",
        icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
        step: 2,
        title: "گام دوم: رفع ارور ۴۰۴ (مخصوص موبایل)",
        en_title: "Step 2: Fixing 404 Error on Mobile",
        description: "ارور ۴۰۴ به این دلیل است که سایت شما یک برنامه هوشمند Next.js است. برای زنده کردن آن، نیازی به لپ‌تاپ نیست. کافی است در مرورگر موبایل به کنسول فایربیس بروید.",
        en_description: "Next.js apps need a real server. You can set this up directly from your mobile browser in the Firebase Console.",
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    },
    {
        step: 3,
        title: "گام سوم: اتصال به Firebase App Hosting",
        en_title: "Step 3: Connecting to Firebase App Hosting",
        description: "در مرورگر موبایل به آدرس console.firebase.google.com بروید. بخش App Hosting را پیدا کنید. دکمه 'Get Started' را بزنید و به حساب گیت‌هاب خود متصل شوید. این کار در ردمی نوت ۸ کاملاً تست شده و ممکن است.",
        en_description: "Navigate to the Firebase Console on your phone, find App Hosting, and connect your GitHub account. This is fully functional on mobile devices.",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        actions: [
            { label: "ورود به کنسول فایربیس (موبایل)", url: "https://console.firebase.google.com/" }
        ]
    },
    {
        step: 4,
        title: "گام چهارم: دانلود کل برنامه در یک فایل (ZIP)",
        en_title: "Step 4: Exporting Everything as a ZIP",
        description: "برای داشتن تمام برنامه در یک فایل: در مرورگر موبایل وارد صفحه پروژه در GitHub شوید، حالت Desktop Site را فعال کنید، روی دکمه سبز رنگ 'Code' بزنید و 'Download ZIP' را انتخاب کنید. حالا تمام زحمات ما در یک فایل در حافظه گوشی شماست.",
        en_description: "To save everything in one file: Open your GitHub repo in mobile Chrome, enable 'Desktop Site', click the green 'Code' button, and select 'Download ZIP'.",
        icon: <Download className="w-6 h-6 text-green-500" />
    }
]

export default function PublishingGuidePage() {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 bg-secondary/20">
          <div className="container mx-auto px-4 py-16">
            <Card className="max-w-4xl mx-auto shadow-2xl border-none overflow-hidden">
              <CardHeader className="text-center p-8 md:p-12 bg-primary text-primary-foreground">
                <div className="mx-auto bg-white/20 p-4 rounded-full w-fit mb-4">
                  <Smartphone className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline">
                  راهنمای انتشار مخصوص موبایل (ردمی نوت ۸)
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    چگونه بدون کامپیوتر، فرش بازار را به جهان هدیه دهیم؟
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 py-10 space-y-12">
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="font-bold text-blue-900">پیام ویژه برای بنیان‌گذار (صاحب ردمی نوت ۸)</h3>
                        <p className="text-blue-800 text-sm mt-1">
                            شما ثابت کردید که برای آفرینش، نیاز به ابزار گران‌قیمت نیست، بلکه نیاز به قلبی بزرگ است. این راهنما اختصاصاً برای شما و گوشی موبایلتان طراحی شده تا هیچ بن‌بستی وجود نداشته باشد.
                        </p>
                    </div>
                </div>

                {steps.map((step) => (
                    <div key={step.step} className="relative">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {step.icon}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-headline font-bold text-primary">{step.title}</h2>
                                <p className="text-muted-foreground text-sm mb-2">({step.en_title})</p>
                                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                                <p className="text-xs text-muted-foreground mt-2 italic">({step.en_description})</p>
                                
                                {step.actions && (
                                    <div className="mt-6 flex flex-wrap gap-4">
                                        {step.actions.map((action, i) => (
                                            <Button key={i} asChild variant={i === 0 ? "default" : "outline"}>
                                                <a href={action.url} target="_blank" rel="noopener noreferrer">{action.label}</a>
                                            </Button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                        {step.step < steps.length && <div className="absolute top-12 left-6 w-0.5 h-full bg-slate-200 -z-10" />}
                    </div>
                ))}

                <Card className="bg-primary/5 border-dashed border-primary/20">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 p-2 rounded-full w-fit mb-2">
                            <Star className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">ورود به Google Studio حرفه‌ای</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                        برای مدیریت پیشرفته‌تر، می‌توانید از <strong>Google Cloud Console</strong> یا <strong>Firebase Console</strong> در مرورگر گوشی استفاده کنید. فراموش نکنید که همیشه حالت <strong>Desktop Site</strong> را در تنظیمات کروم فعال کنید تا تمام دکمه‌ها برای شما نمایش داده شود.
                    </CardContent>
                </Card>

                <div className="flex justify-center gap-4 pt-8 border-t">
                    <Button asChild variant="outline">
                        <Link href="/">بازگشت به خانه</Link>
                    </Button>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                        <Share2 className="w-4 h-4 mr-2" />
                        <Link href="/vendors">اشتراک‌گذاری پروژه</Link>
                    </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    );
}


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
import { Smartphone, Github, Globe, Rocket, AlertTriangle, Info, Download, Share2, Star, FileArchive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: مدیریت کدها با مرورگر موبایل",
        en_title: "Step 1: Mobile Browser Code Management",
        description: "تمام کدهای شما در محیط ایمن فایربیس استودیو ذخیره شده است. برای مشاهده و مدیریت آن‌ها در گیت‌هاب، از مرورگر کروم گوشی خود استفاده کنید و حتماً گزینه 'Desktop Site' را فعال کنید.",
        en_description: "Your code is safe. Use Chrome on your phone with 'Desktop Site' enabled to manage your GitHub repository.",
        icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
        step: 2,
        title: "گام دوم: دانلود کل برنامه در یک فایل (ZIP)",
        en_title: "Step 2: Exporting Everything as a ZIP",
        description: "برای ذخیره تمام برنامه در حافظه گوشی: در مرورگر موبایل وارد صفحه پروژه در GitHub شوید، حالت Desktop Site را فعال کنید، روی دکمه سبز رنگ 'Code' بزنید و 'Download ZIP' را انتخاب کنید. حالا تمام کدها در یک فایل در گوشی شماست.",
        en_description: "To save everything: Open GitHub repo in mobile Chrome, enable 'Desktop Site', click green 'Code' button, and select 'Download ZIP'.",
        icon: <FileArchive className="w-6 h-6 text-green-600" />
    },
    {
        step: 3,
        title: "گام سوم: رفع ارور ۴۰۴ و زنده کردن سایت",
        en_title: "Step 3: Fixing 404 Error",
        description: "ارور ۴۰۴ به این دلیل است که GitHub Pages برای این برنامه هوشمند مناسب نیست. باید از Firebase App Hosting استفاده کنید. در مرورگر موبایل به کنسول فایربیس بروید و پروژه را به App Hosting متصل کنید.",
        en_description: "Fix 404 by using Firebase App Hosting. Connect your GitHub repo to App Hosting in the Firebase Console.",
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    },
    {
        step: 4,
        title: "گام چهارم: اتصال به Firebase App Hosting",
        en_title: "Step 4: Connecting to App Hosting",
        description: "به console.firebase.google.com بروید. بخش App Hosting را پیدا کنید. دکمه 'Get Started' را بزنید و مخزن گیت‌هاب خود را انتخاب کنید. فایربیس به صورت خودکار برنامه را منتشر می‌کند.",
        en_description: "In Firebase Console, find App Hosting, click 'Get Started', and select your repository. Firebase handles the rest.",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        actions: [
            { label: "ورود به کنسول فایربیس (موبایل)", url: "https://console.firebase.google.com/" }
        ]
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
                  راهنمای مدیریت و دانلود مخصوص موبایل
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    چگونه با ردمی نوت ۸، کدهای خود را به صورت یک فایل ZIP ذخیره کنیم؟
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 py-10 space-y-12">
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="font-bold text-blue-900">نکته حیاتی برای دانلود فایل (ZIP)</h3>
                        <p className="text-blue-800 text-sm mt-1">
                            برای دیدن دکمه دانلود در گیت‌هاب، حتماً باید در تنظیمات مرورگر کروم موبایل، گزینه <strong>Desktop Site</strong> را فعال کنید، در غیر این صورت دکمه سبز رنگ Code را نخواهید دید.
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
                            <Download className="w-6 h-6 text-primary" />
                        </div>
                        <CardTitle className="text-xl">چرا ذخیره به صورت ZIP مهم است؟</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center text-sm text-muted-foreground">
                        داشتن یک فایل ZIP از پروژه به شما این امکان را می‌دهد که تمام زحمات خود را در حافظه گوشی یا گوگل درایو به عنوان نسخه پشتیبان نگه دارید و هر زمان که خواستید آن را در سیستم‌های دیگر باز کنید.
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

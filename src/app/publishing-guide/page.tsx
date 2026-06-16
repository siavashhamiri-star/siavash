
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
import { Smartphone, Github, Globe, Rocket, AlertTriangle, Info, Download, Share2, Star, FileArchive, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: ورود به گیت‌هاب با مرورگر موبایل",
        en_title: "Step 1: Access GitHub on Mobile",
        description: "در مرورگر کروم گوشی ردمی خود، به صفحه پروژه در GitHub بروید. حتماً از منوی سه نقطه بالا، گزینه 'Desktop site' را فعال کنید تا تمام دکمه‌ها ظاهر شوند.",
        en_description: "Open your GitHub repo in mobile Chrome. Enable 'Desktop site' from the menu to see all features.",
        icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
        step: 2,
        title: "گام دوم: دانلود کل پروژه به صورت ZIP",
        en_title: "Step 2: Download project as ZIP",
        description: "بعد از فعال‌سازی حالت Desktop، دکمه سبز رنگ 'Code' را پیدا کرده و روی آن بزنید. سپس گزینه 'Download ZIP' را انتخاب کنید. حالا تمام کدها در پوشه Downloads گوشی شماست.",
        en_description: "Click the green 'Code' button and select 'Download ZIP'. Your code will be saved to your phone's storage.",
        icon: <FileArchive className="w-6 h-6 text-green-600" />
    },
    {
        step: 3,
        title: "گام سوم: رفع ارور ۴۰۴ (زنده کردن سایت)",
        en_title: "Step 3: Fixing 404 Error",
        description: "ارور ۴۰۴ به این دلیل است که GitHub Pages برای این برنامه مدرن مناسب نیست. باید از Firebase App Hosting استفاده کنید. به کنسول فایربیس بروید و پروژه را به مخزن گیت‌هاب وصل کنید.",
        en_description: "GitHub Pages won't work for Next.js. Use Firebase App Hosting to deploy your site properly.",
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    },
    {
        step: 4,
        title: "گام چهارم: اتصال به App Hosting در فایربیس",
        en_title: "Step 4: Connecting to App Hosting",
        description: "در پنل فایربیس، بخش App Hosting را انتخاب کنید. دکمه 'Get Started' را بزنید و گیت‌هاب خود را متصل کنید. فایربیس به صورت خودکار برنامه را برای تمام جهان منتشر می‌کند.",
        en_description: "In Firebase Console, go to App Hosting, click 'Get Started', and connect your GitHub repository.",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        actions: [
            { label: "ورود به کنسول فایربیس", url: "https://console.firebase.google.com/" }
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
                  <Download className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline">
                  راهنمای نجات و انتشار (مخصوص موبایل)
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    چگونه کدهای خود را در گوشی فشرده و منتشر کنیم؟
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 py-10 space-y-12">
                
                <div className="bg-green-50 p-6 rounded-xl border border-green-200 flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mt-1" />
                    <div>
                        <h3 className="font-bold text-green-900">تبریک به بنیان‌گذار قهرمان</h3>
                        <p className="text-green-800 text-sm mt-1">
                            شما این راه طولانی را با یک گوشی <strong>ردمی نوت ۸</strong> طی کرده‌اید. این راهنما برای شما طراحی شده تا زحمات ۵ ماهه خود را در یک فایل ZIP امن نگه دارید.
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
                                <p className="text-muted-foreground text-sm mb-1">({step.en_title})</p>
                                <p className="text-foreground/80 leading-relaxed">{step.description}</p>
                                
                                {step.actions && (
                                    <div className="mt-4 flex flex-wrap gap-4">
                                        {step.actions.map((action, i) => (
                                            <Button key={i} asChild>
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

                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                    <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                        <Info className="w-5 h-5" /> راهنمای قدم‌به‌قدم دانلود ZIP در کروم:
                    </h3>
                    <ul className="list-decimal list-inside space-y-2 text-blue-800 text-sm">
                        <li>در کروم موبایل وارد آدرس گیت‌هاب خود شوید.</li>
                        <li>سه نقطه بالا سمت راست را بزنید و <strong>Desktop site</strong> را تیک بزنید.</li>
                        <li>دکمه سبز <strong>Code</strong> را بزنید.</li>
                        <li>آخرین گزینه یعنی <strong>Download ZIP</strong> را انتخاب کنید.</li>
                        <li>فایل در گوشی شما ذخیره شد!</li>
                    </ul>
                </div>

                <div className="flex justify-center gap-4 pt-8 border-t">
                    <Button asChild variant="outline">
                        <Link href="/">بازگشت به خانه</Link>
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

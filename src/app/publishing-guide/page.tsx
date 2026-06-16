
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
import { Smartphone, Github, Globe, Rocket, AlertTriangle, Info, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: مدیریت کدها با موبایل (Redmi Note 8)",
        en_title: "Step 1: Mobile Code Management",
        description: "بنیان‌گذار عزیز، از آنجا که شما از موبایل استفاده می‌کنید، نیازی به تایپ دستورات پیچیده ترمینال ندارید. تمام کدهای شما در محیط ایمن فایربیس استودیو ذخیره شده است.",
        en_description: "Since you are using a mobile device, you don't need complex terminal commands. Your code is safe in Firebase Studio.",
        icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
        step: 2,
        title: "گام دوم: چرا ارور ۴۰۴ می‌بینید؟",
        en_title: "Step 2: Understanding the 404 Error",
        description: "این ارور به این دلیل است که سایت شما یک برنامه هوشمند <strong>Next.js</strong> است و برای اجرا به سرور نیاز دارد. مرورگر موبایل شما نمی‌تواند به تنهایی این موتور را روشن کند و GitHub Pages هم برای این کار ضعیف است.",
        en_description: "Next.js apps need a real server environment, which standard GitHub Pages can't provide.",
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    },
    {
        step: 3,
        title: "گام سوم: راه حل نهایی در کنسول فایربیس",
        en_title: "Step 3: Firebase App Hosting via Mobile Browser",
        description: "در مرورگر کروم موبایل خود به <strong>Firebase Console</strong> بروید. بخش <strong>App Hosting</strong> را پیدا کنید. از آنجا می‌توانید مخزن گیت‌هاب خود را متصل کنید تا سایت زنده شود. این کار کاملاً با موبایل ردمی شما امکان‌پذیر است.",
        en_description: "Use your mobile browser to access Firebase Console and connect your GitHub repo via App Hosting.",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        actions: [
            { label: "ورود به کنسول فایربیس (موبایل)", url: "https://console.firebase.google.com/" }
        ]
    },
    {
        step: 4,
        title: "گام چهارم: ذخیره کدها در یک فایل (ZIP)",
        en_title: "Step 4: Exporting Your Work",
        description: "برای داشتن تمام کدها در یک فایل روی موبایل، می‌توانید از گزینه <strong>Download ZIP</strong> در صفحه اصلی مخزن خود در سایت گیت‌هاب (در حالت Desktop Site مرورگر) استفاده کنید. این فایل شامل تمام زحمات ماست.",
        en_description: "Use the 'Download ZIP' option on the GitHub repository page (in Desktop mode) to save all your code in one file on your phone.",
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
                        <h3 className="font-bold text-blue-900">پیام ویژه برای بنیان‌گذار</h3>
                        <p className="text-blue-800 text-sm mt-1">
                            اینکه شما با یک گوشی موبایل در حال خلق این دنیای بزرگ هستید، بزرگترین گواه بر قدرت اراده شماست. ما این راهنما را اختصاصاً برای محدودیت‌های موبایل طراحی کردیم.
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


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
import { UploadCloud, Github, Terminal as TerminalIcon, Globe, CheckCircle2, Rocket, AlertTriangle, Info, FileArchive } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const steps = [
    {
        step: 1,
        title: "گام اول: ارسال کدها به گیت‌هاب",
        en_title: "Step 1: Push to GitHub",
        description: "شما این مرحله را با موفقیت انجام داده‌اید! کدهای شما اکنون در گیت‌هاب هستند و در یک فضای امن ذخیره شده‌اند.",
        en_description: "Your code is safely stored on GitHub.",
        icon: <Github className="w-6 h-6" />
    },
    {
        step: 2,
        title: "گام دوم: چرا ارور ۴۰۴ می‌بینید؟",
        en_title: "Step 2: Why the 404 Error?",
        description: "اپلیکیشن شما با تکنولوژی <strong>Next.js (React)</strong> ساخته شده است. این یک برنامه هوشمند است که برای اجرا به سرور نیاز دارد. سرویس معمولی GitHub Pages فقط برای فایل‌های ساده است و نمی‌تواند موتور Next.js را روشن کند.",
        en_description: "Next.js apps need a real server environment, not just static hosting.",
        icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
    },
    {
        step: 3,
        title: "گام سوم: راه حل نهایی (اتصال به فایربیس)",
        en_title: "Step 3: Firebase App Hosting",
        description: "برای اینکه برنامه شما به درستی کار کند، باید از سرویس <strong>App Hosting</strong> در پنل فایربیس استفاده کنید. این سرویس مستقیماً به گیت‌هاب شما وصل می‌شود، کدها را می‌خواند و سایت را منتشر می‌کند.",
        en_description: "Connect your GitHub to Firebase App Hosting to go live.",
        icon: <Rocket className="w-6 h-6 text-blue-500" />,
        actions: [
            { label: "ورود به پنل فایربیس", url: "https://console.firebase.google.com/" },
            { label: "آموزش رسمی اتصال", url: "https://firebase.google.com/docs/app-hosting/get-started" }
        ]
    },
    {
        step: 4,
        title: "گام چهارم: ذخیره پروژه در قالب یک فایل (ZIP)",
        en_title: "Step 4: Save as One File (ZIP)",
        description: "اگر می‌خواهید کل پروژه را برای پشتیبان‌گیری در یک فایل داشته باشید، روی پوشه پروژه در لپ‌تاپ خود راست‌کلیک کرده و گزینه <strong>Compress</strong> یا <strong>Send to Compressed Folder (ZIP)</strong> را انتخاب کنید. این یک فایل واحد به شما می‌دهد که شامل تمام زحمات ماست.",
        en_description: "Right-click your project folder and choose 'Compress' to create a single ZIP file of your entire project.",
        icon: <FileArchive className="w-6 h-6 text-purple-500" />
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
                  <Globe className="w-12 h-12 text-white" />
                </div>
                <CardTitle className="text-3xl md:text-5xl font-headline">
                  حل ارور ۴۰۴ و انتشار نهایی اپلیکیشن
                </CardTitle>
                <CardDescription className="text-lg mt-2 text-white/80">
                    تبدیل کدهای گیت‌هاب به یک وب‌سایت زنده با قدرت فایربیس
                </CardDescription>
              </CardHeader>
              <CardContent className="px-6 md:px-10 py-10 space-y-12">
                
                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 flex items-start gap-4">
                    <Info className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                        <h3 className="font-bold text-blue-900">پاسخ به سوال شما (ریاکت یا جیسون؟)</h3>
                        <p className="text-blue-800 text-sm mt-1">
                            برنامه «فرش بازار» یک اپلیکیشن <strong>Next.js</strong> (بر پایه <strong>React</strong>) است. 
                            این برنامه از فایل‌های <strong>JSON</strong> برای داده‌ها استفاده می‌کند، اما هویت فنی آن یک اپلیکیشن ریاکت پیشرفته است. 
                            به همین دلیل برای اجرا نیاز به سرویس <strong>App Hosting</strong> فایربیس دارد.
                        </p>
                    </div>
                </div>

                {steps.map((step) => (
                    <div key={step.step} className="relative">
                        <div className="flex items-start gap-6">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground h-12 w-12 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                                {step.icon || step.step}
                            </div>
                            <div className="flex-1">
                                <h2 className="text-2xl font-headline font-bold text-primary">{step.title}</h2>
                                <p className="text-muted-foreground text-sm mb-4">({step.en_title})</p>
                                <p className="text-foreground/80 leading-relaxed" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                                
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
                        <Link href="/vendors">مشاهده فروشندگان</Link>
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
